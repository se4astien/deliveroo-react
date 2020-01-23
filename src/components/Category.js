import React from "react";
import Meal from "./Meal";
import Cart from "./Cart";

export default function Meals(props) {
  return (
    <section className="content">
      <div className="wrapper">
        <div className="meals">
          {Object.keys(props.meals).map((category, index) => {
            // console.log(category);
            return (
              <div key={index} className="meals-items">
                <h2>{category > 0 ? category : null}</h2>
                {props.meals[category].map((meal, index) => {
                  //   console.log(meal);
                  return <Meal key={index} {...meal} />;
                })}
              </div>
            );
          })}
        </div>
        <Cart />
      </div>
    </section>
  );
}
