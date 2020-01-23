import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
// import Cart from "./components/Cart";
import Meal from "./components/Meal";
import "./css/style.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [meals, setMeals] = useState({});
  // Panier
  const [products, setProducts] = useState([
    {
      id: "88",
      name: "Brunch",
      price: 25,
      quantity: 1
    },
    {
      id: "90",
      name: "Granola",
      price: 20,
      quantity: 3
    }
  ]);

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
                  if (meals[category].length > 0) {
                    return (
                      <div key={index} className="meals-items">
                        <h2>{category}</h2>
                        {meals[category].map((meal, index) => {
                          return <Meal key={index} {...meal} />;
                        })}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="cart">
                <div className="cart-box">
                  {products.map(product => {
                    return <div>{product.name}</div>;
                  })}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
export default App;
