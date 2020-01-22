import React from "react";

export default function Card() {
  return (
    <div className="cart">
      <div className="cart-box">
        <button className="disabled validate">Valider mon panier</button>
        <div className="empty"></div>

        <div className="items">
          <div className="results"></div>
          <div className="total"></div>
        </div>
      </div>
    </div>
  );
}
