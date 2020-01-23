import React from "react";

export default function Card(props) {
  return (
    <div className="cart">
      <div className="cart-box">
        <button className="disabled validate">Valider mon panier</button>
        <div className="empty"></div>

        <div className="items">
          <div className="cart-items">
            <div className="cart-line">
              <div className="counter">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className="cart-item-name">{props.name}</div>
              <div className="cart-amount">6,00 €</div>
            </div>
          </div>
          <div className="results">
            <span>Sous-total</span>
            <span className="cart-ship">6,00 €</span>
          </div>
          <div className="ship">
            <span>Frais de livraison</span>
            <span>2,50 €</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>30,50 €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
