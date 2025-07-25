import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="cartItem">
      {" "}
      <h1> Cart </h1>
      <div className="cartItemList">
        {" "}
        <ItemList items={cartItems} />{" "}
      </div>
    </div>
  );
};

export default Cart;
