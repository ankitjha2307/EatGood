import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&s"
        />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

const ResturentCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        className="red-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7a2aca35-9ddb-4c31-a82e-6d3c9c665f43_10208.jpg"
      />
      <h3> {resData.info.name} </h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4> {resData.info.avgRating}</h4>
    </div>
  );
};

const resObj = {
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
    availability: {
      nextCloseTime: "2025-07-16 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-453f6e3f-4095-4fd6-aa81-2acff75ad685",
  },
  cta: {
    link: "https://www.swiggy.com/city/delhi/chinese-wok-chandni-chowk-omaxe-mall-rest831065",
    type: "WEBLINK",
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        <ResturentCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
