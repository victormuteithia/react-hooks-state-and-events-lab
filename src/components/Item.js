import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  const listClass = isInCart ? "in-cart" : ""
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart"

  function handleClick(){
    setIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
