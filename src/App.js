import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Meal from "./components/Meal";
import "./css/style.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [meals, setMeals] = useState({});
  const [products, setProducts] = useState([]); // Panier

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

  // Fonction pour ajouter un produit
  const addProduct = product => {
    const newProducts = [...products];
    let isFound = false;
    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === product.id) {
        newProducts[i].quantity = newProducts[i].quantity + 1;
        isFound = true;
        break;
      }
    }
    if (isFound === false) {
      product.quantity = 1;
      newProducts.push(product);
    }
    setProducts(newProducts);
  };

  // Supprimer un élément du tableau
  const removeProduct = product => {
    const newProducts = [...products];
    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === product.id) {
        newProducts[i].quantity = newProducts[i].quantity - 1;
        if (newProducts[i].quantity === 0) {
          // Pour retirer un élément du tableau
          newProducts.splice(i, 1);
        }
        // Pour ne pas chercher dans tout le tableau une fois qu'on a trouvé
        break;
      }
    }
    setProducts(newProducts);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total = total + products[i].price * products[i].quantity;
    }
    return Number(total.toFixed(2));
  };

  const totalPrice = calculateTotal();
  const shippingCost = 2.5;

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
                          return (
                            <Meal
                              key={meal.id}
                              addProduct={addProduct}
                              data={meal}
                            />
                          );
                        })}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="cart">
                <div className="cart-box">
                  {/* <button className="validate disable"> */}
                  <button className={products < 1 ? "disable" : "validate"}>
                    Valider mon panier
                  </button>
                  <div className="items">
                    {products.map(product => {
                      const productPrice = product.price * product.quantity;
                      return (
                        <Cart
                          addProduct={addProduct}
                          removeProduct={removeProduct}
                          productPrice={productPrice}
                          data={product}
                        />
                      );
                    })}
                    {products < 1 ? (
                      <div className="cart-empty">
                        <p>Votre panier est vide</p>
                      </div>
                    ) : (
                      <>
                        <div className="results">
                          <span>Sous-total</span>
                          <span className="cart-ship">
                            {totalPrice.toFixed(2)} €
                          </span>
                        </div>
                        <div className="ship">
                          <span>Frais de livraison</span>
                          <span>{shippingCost.toFixed(2)} €</span>
                        </div>
                        <div className="total">
                          <span>Total</span>
                          <span>{totalPrice + shippingCost + "0"}€</span>
                        </div>
                      </>
                    )}
                  </div>
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
