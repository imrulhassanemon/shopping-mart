import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/header/navbar";
import Allproducts from "./component/Allproducts/Allproducts";
import CartContainer from "./component/CartContainer/CartContainer";

const App = () => {


  const [isActive, setActive] = useState({
    cart: NaN,
    status: "active",
  });


  const handleIsActiveStatus = (status) => {
    if(status === 'cart'){
      setActive({
        cart: true,
        status: 'cart-active'
      })
    }
    else{
      setActive({
        cart: false, 
        status: "about-active"
      })
    }
  }
  console.log(isActive);


  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-around">
        <Allproducts></Allproducts>
        <CartContainer isActive={isActive} handleIsActiveStatus={handleIsActiveStatus}></CartContainer>
      </div>
    </div>
  );
};

export default App;
