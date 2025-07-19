import Shimmer from "./Shimmir";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constant";
import useResturantMenu from "../utils/useResturnatMenu";
import ResCatrgory from "./ResCategory";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>

      {categories.map((category, index) => (
        <ResCatrgory key={index} data={category.card.card} />
      ))}
    </div>
  );
};

export default ResturantMenu;
