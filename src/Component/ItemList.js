import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handelCartItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="head-accodion">
        {items.map((item) => (
          <div className="item-list" key={item.card.info.id}>
            <div>
              <span> {item.card.info.name}</span>{" "}
              <span>
                - Rs
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p>{item.card.info.description}</p>
            </div>

            <div className="item-container">
              <img
                className="item-image"
                src={CDN_URL + item.card.info.imageId}
              />

              <button onClick={() => handelCartItem(item)}> + ADD </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
