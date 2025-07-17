import ResturentCard from "./ResturentCard";
import { useState } from "react";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([
    {
      info: {
        id: "831065",
        name: "Chinese Wok",
        cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
        locality: "Chandni Chowk",
        areaName: "Omaxe mall",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4,
        parentId: "61955",
        avgRatingString: "4.0",
        totalRatingsString: "384",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "831064",
        name: "KFC",
        cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
        locality: "Chandni Chowk",
        areaName: "Omaxe mall",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.4,
        parentId: "61955",
        avgRatingString: "4.0",
        totalRatingsString: "384",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="top-rated-btn"
          onClick={() => {
            filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4.1
            );
            setListOfResturant(filteredList);
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
