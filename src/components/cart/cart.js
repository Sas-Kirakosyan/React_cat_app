import React from "react";
import "./cart.scss";

const Cart = ({ image }) => {
  const { url } = image;
  return <img src={url} width={"auto"} height="200px" />;
};

export default Cart;
