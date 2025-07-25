import { CDN_URL } from "../utils/constant";

const ResturentCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <img className="red-img" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-link"> {name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (ResturentCard) => {
  return (props) => {
    return (
      <div className="relative-card">
        <label className="promoted"> Promoted </label>
        <ResturentCard {...props} />
      </div>
    );
  };
};

export default ResturentCard;
