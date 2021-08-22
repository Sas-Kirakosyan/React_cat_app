import React from "react";
import "./cart.scss";

const Cart = ({ image }) => {
  const { url, width, height } = image;
  return <img src={url} width={width} height={height} />;
};

export default Cart;
