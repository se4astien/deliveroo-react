import React from "react";
import Meal from "./Meal";
import Cart from "./Cart";

export default function Meals(props) {
  return (
    <section className="content">
      <div className="wrapper">
        <div className="meals">
          {Object.keys(props.meals).map((category, index) => {
            console.log(category);
            return (
              // On a bouclé sur les catégories
              <div key={index} className="meals-items">
                <h2>{category}</h2>
                {props.meals[category].map((meal, index) => {
                  console.log(meal);
                  return (
                    // On a bouclé sur les index à l'intérieur des catégories
                    <div key={index} className="meal-item">
                      <div className="text">
                        <h3>{meal.title}</h3>
                        <p>{meal.description}</p>
                        <div className="flex">
                          <span className="price">{meal.price}€</span>
                          {meal.popular === true ? (
                            <span className="popular">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#ff8000"
                                className="feather feather-star"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                              Popular
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="picture">
                        <img
                          src={meal.picture}
                          alt={meal.title}
                          width="130"
                          height="130"
                        />
                      </div>
                    </div>
                  );
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
