import ResturentCard, { withPromotedLabel } from "./ResturentCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmir";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [searchText, setSearchtext] = useState("");

  const ResturentCardPromoted = withPromotedLabel(ResturentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-btn">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterResturent = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfResturant(filterResturent);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="top-rated-btn"
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfResturant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="resContainer">
        {listOfResturant.map((resturent) => (
          <Link key={resturent.info.id} to={"/resturant/" + resturent.info.id}>
            {resturent.info.avgRating > 4.3 ? (
              <ResturentCardPromoted resData={resturent} />
            ) : (
              <ResturentCard resData={resturent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
