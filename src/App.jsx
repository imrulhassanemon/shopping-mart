import "./App.css";
import React from "react";
import Navbar from "./component/header/navbar";
import Allproducts from "./component/Allproducts/Allproducts";
import CartContainer from "./component/CartContainer/CartContainer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-around">
        <Allproducts></Allproducts>
        <CartContainer></CartContainer>
      </div>
    </div>
  );
};

export default App;
