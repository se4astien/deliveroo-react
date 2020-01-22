import React from "react";
import Meal from "./Meal";
import Card from "./Card";

export default function Meals() {
  return (
    <section className="content">
      <div className="wrapper">
        <div className="meals">
          <div className="meals-items">
            <h2>Brunchs</h2>
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
          </div>
        </div>
        <Card />
      </div>
    </section>
  );
}
