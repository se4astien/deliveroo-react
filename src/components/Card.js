import React from "react";

export default function Card() {
  return (
    <div className="cart">
      <div className="cart-box">
        <button>Valider mon panier</button>
        <div className="items"></div>
        <div className="results"></div>
        <div className="total"></div>
      </div>
    </div>
  );
}
