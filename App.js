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

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="red-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
          cloudinaryImageId
        }
      />
      <h3> {name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resList = [
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
  },
  {
    info: {
      id: "804724",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/9dbea919-e4a4-4a05-9708-0476ad6dbf35_804724.JPG",
      locality: "Kaccha Bagh",
      areaName: "Chandni Chowk",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "110",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-16 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
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
      link: "https://www.swiggy.com/city/delhi/kfc-kaccha-bagh-chandni-chowk-rest804724",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "804071",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/3c9c1cca-6a1c-472b-a079-0eeb2f4e2dd2_804071.JPG",
      locality: "H.C. Sen Marg",
      areaName: "Omaxe ChandniChowk",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "360",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
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
        header: "20% OFF",
        subHeader: "UPTO ₹50",
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
      link: "https://www.swiggy.com/city/delhi/pizza-hut-h-c-sen-marg-omaxe-chandnichowk-rest804071",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253765",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f5d3a015-8b82-443a-8a0e-d6f2b03697ef_253765.JPG",
      locality: "Kumar Theatre",
      areaName: "Chandni Chowk",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-16 23:55:00",
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
        subHeader: "AT ₹39",
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
          rating: "3.7",
          ratingCount: "1.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-453f6e3f-4095-4fd6-aa81-2acff75ad685",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/mcdonalds-kumar-theatre-chandni-chowk-rest253765",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "807783",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/a049117e-1a3d-4ca0-94a0-9e25a17879df_807783.jpg",
      locality: "Omaxe Mall",
      areaName: "Chandni Chowk",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "679",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-16 23:59:00",
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
        subHeader: "AT ₹139",
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
      link: "https://www.swiggy.com/city/delhi/burger-king-omaxe-mall-chandni-chowk-rest807783",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "740647",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/0cc6d0e0-6386-4261-bac0-e45757f14b83_740647.JPG",
      locality: "Mandelia Road",
      areaName: "Kamla Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-17 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
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
      link: "https://www.swiggy.com/city/delhi/theobroma-mandelia-road-kamla-nagar-rest740647",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "701049",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/54800e0d-2df2-43c3-93ac-3c349f809bd2_701049.JPG",
      locality: "JAWAHAR NAGAR",
      areaName: "Block-Ua",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.7",
      totalRatingsString: "754",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-17 01:00:00",
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
        subHeader: "AT ₹124",
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
      link: "https://www.swiggy.com/city/delhi/nic-ice-creams-jawahar-nagar-block-ua-rest701049",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "831067",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_831067.JPG",
      locality: "Chandni Chowk",
      areaName: "Omaxe mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "434792",
      avgRatingString: "4.2",
      totalRatingsString: "128",
      sla: {
        deliveryTime: 40,
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
      link: "https://www.swiggy.com/city/delhi/big-bowl-chandni-chowk-omaxe-mall-rest831067",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "659837",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/666f50e7-670b-409b-9ccf-e8983056b43a_659837.jpg",
      locality: "Naiwala",
      areaName: "Karol Bagh",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.6,
      parentId: "3818",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-17 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹53",
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
      link: "https://www.swiggy.com/city/delhi/bakingo-naiwala-karol-bagh-rest659837",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "88982",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/5367378a-4509-4a79-aae9-53cbeeb23ea4_88982.JPG",
      locality: "Jawahar Nagar",
      areaName: "Kamla Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.2,
      parentId: "1557",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "65% OFF",
        subHeader: "UPTO ₹125",
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
      link: "https://www.swiggy.com/city/delhi/taco-bell-jawahar-nagar-kamla-nagar-rest88982",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27797",
      name: "Natural Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/df82a916-676a-4681-84df-c43d8971a7ec_27797.jpg",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      parentId: "2093",
      avgRatingString: "4.7",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-17 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
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
          rating: "4.6",
          ratingCount: "20K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-453f6e3f-4095-4fd6-aa81-2acff75ad685",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/natural-ice-cream-connaught-place-rest27797",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "770196",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a2fbdd94-b3af-4fab-89c8-6fd240cd6951_770196.JPG",
      locality: "Gandhi Nagar",
      areaName: "Dilshad Gardens",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "132",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-16 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹449",
        discountTag: "FLAT DEAL",
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
      link: "https://www.swiggy.com/city/delhi/kwality-walls-ice-cream-and-more-gandhi-nagar-dilshad-gardens-rest770196",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "8619",
      name: "Bikkgane Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/40cb7f19-6a78-424c-8d4b-0163bc4f42b8_8619.jpg",
      locality: "PVR Rivoli",
      areaName: "Connaught Place",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Mughlai", "North Indian"],
      avgRating: 4.3,
      parentId: "5070",
      avgRatingString: "4.3",
      totalRatingsString: "30K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-17 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
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
          rating: "4.1",
          ratingCount: "8.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-453f6e3f-4095-4fd6-aa81-2acff75ad685",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/bikkgane-biryani-pvr-rivoli-connaught-place-rest8619",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "701050",
      name: "Grameen Kulfi",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/de4ee4f2-115b-4bd2-9b3e-c6e2aabd9102_701050.jpg",
      locality: "JAWAHAR NAGAR",
      areaName: "Block-Ua",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.8",
      totalRatingsString: "163",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-17 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹92",
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
      link: "https://www.swiggy.com/city/delhi/grameen-kulfi-jawahar-nagar-block-ua-rest701050",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "617971",
      name: "SMOOR",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/21/146d6d13-d093-445f-a45d-4c4eb4c553a4_617971.jpg",
      locality: "Vikas Marg",
      areaName: "Laxmi Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.7,
      parentId: "3506",
      avgRatingString: "4.7",
      totalRatingsString: "535",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 9.2,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-17 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
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
      link: "https://www.swiggy.com/city/delhi/smoor-vikas-marg-laxmi-nagar-rest617971",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        {resList.map((resturent) => (
          <ResturentCard resData={resturent} />
        ))}
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
