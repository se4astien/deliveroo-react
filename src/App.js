import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Meals from "./components/Meals";
import "./css/style.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Meals />
    </div>
  );
}
export default App;
