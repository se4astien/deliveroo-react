import React from "react";
import Meal from "./Meal";
import Cart from "./Cart";

export default function Meals(props) {
  return (
    <section className="content">
      <div className="wrapper">
        <div className="meals">
          <div className="meals-items">
            {Object.keys(props.menu).map((category, index) => {
              return (
                <div key={index}>
                  <h2>{category}</h2>
                  <div>
                    {props.menu[category].map((meal, index) => {
                      return <Meal key={index} {...meal} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Cart />
      </div>
    </section>
  );
}
