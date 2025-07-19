import { useState } from "react";
import ItemList from "./ItemList";

const ResCatrgory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="accodio-header">
      <div className="accodion" onClick={handleClick}>
        <span className="title">
          {data.title} ({data.itemCards.length})<span>⬇️</span>
        </span>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCatrgory;
