import ResturentCard from "./ResturentCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        {resList.map((resturent) => (
          <ResturentCard key={resturent.info.id} resData={resturent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
