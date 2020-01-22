import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
// import Cart from "./components/Cart";
import Content from "./components/Content";
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
          <Content meals={meals} setMeals={setMeals} />
        </>
      )}
    </div>
  );
}
export default App;
