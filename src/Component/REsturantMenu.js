import Shimmer from "./Shimmir";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constant";
import useResturantMenu from "../utils/useResturnatMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2> Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100} Rs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
