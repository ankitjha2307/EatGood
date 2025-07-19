import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
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

            <img
              className="item-image"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
