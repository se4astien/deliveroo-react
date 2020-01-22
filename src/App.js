import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Cart from "./components/Cart";
// import Meals from "./components/Meals";
import "./css/style.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [meals, setMeals] = useState({});

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://deliveroo-api.now.sh/menu");
      setRestaurant(response.data.restaurant);
      setMeals(response.data.menu);
      setIsLoading(false);
    } catch (error) {
      console.log("An error occured");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {isLoading === true ? (
        <p>En cours de chargement...</p>
      ) : (
        <>
          <Header restaurant={restaurant} setRestaurant={setRestaurant} />
          <section className="content">
            <div className="wrapper">
              <div className="meals">
                {Object.keys(meals).map((category, index) => {
                  console.log(category);
                  return (
                    // On a bouclé sur les catégories
                    <div key={index} className="meals-items">
                      <h2>{category}</h2>
                      {meals[category].map((meal, index) => {
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
        </>
      )}
    </div>
  );
}
export default App;
