import ResturentCard from "./ResturentCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmir";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);

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

  if (listOfResturant == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="top-rated-btn"
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfResturant(filterList);
          }}
        >
          {" "}
          Top Rated Restursnt{" "}
        </button>
      </div>
      <div className="resContainer">
        {listOfResturant.map((resturent) => (
          <ResturentCard key={resturent.info.id} resData={resturent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
