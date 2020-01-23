import React from "react";

export default function Card(props) {
  console.log(props.data); // le plat
  return (
    <div className="cart-items">
      <div className="counter">
        <span
          onClick={() => {
            props.removeProduct({
              id: props.data.id,
              name: props.data.name,
              product: props.data.price
            });
          }}
        >
          -
        </span>
        <span>{props.data.quantity}</span>
        <span
          onClick={() => {
            props.addProduct({
              id: props.data.id,
              name: props.data.name,
              product: props.data.price
            });
          }}
        >
          +
        </span>
      </div>
      <div className="cart-item-name">{props.data.name}</div>
      <div className="cart-amount"> {props.productPrice.toFixed(2)} €</div>
    </div>
  );
}
