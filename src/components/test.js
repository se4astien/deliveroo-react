import React from "react";

export default function Card(props) {
  console.log(props.data); // le plat
  return (
    <>
      <button className="disabled validate">Valider mon panier</button>
      <div className="empty"></div>
      <div className="items">
        <div className="cart-items">
          <div className="cart-line">
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
              <span>{props.quantity}</span>
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
            <div className="cart-amount">{props.productPrice.toFixed(2)} €</div>
          </div>
        </div>
        <div className="results">
          <span>Sous-total</span>
          <span className="cart-ship">{props.data.totalPrice} €</span>
        </div>
        <div className="ship">
          <span>Frais de livraison</span>
          <span>{props.data.shippingCost} €</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>{props.data.totalPrice + props.data.shippingCost} €</span>
        </div>
      </div>
    </>
  );
}
