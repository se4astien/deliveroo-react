import React from "react";

export default function Meal(props) {
  return (
    <div className="meal-item">
      <div className="text">
        <h3>{props.meal.title}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          ad omnis aut explicabo culpa. Obcaecati aut, quis ea aliquid
          provident, architecto mollitia reiciendis, sunt blanditiis ullam
          atque! Suscipit, quasi sequi?
        </p>
        <span>25,00€</span>
        <span>Populaire</span>
      </div>
      <div className="picture">
        <img src="" alt="" />
      </div>
    </div>
  );
}
