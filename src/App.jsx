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




  const [selectedProduct, setSelectedProduct] = useState([])


  const handleSelectedProduct = (product)=> {
    
    // const isAlreadySelected = selectedProduct.find((item) => item.id === product.id);
    // if (isAlreadySelected) {
    //   setSelectedProduct(selectedProduct.filter((item) => item.id !== product.id));
    // } else {
    //   setSelectedProduct([...selectedProduct, product]);
    // }
    setSelectedProduct([...selectedProduct, product]);;

  }

  console.log(selectedProduct);




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
      <Navbar selectedProduct={selectedProduct}></Navbar>
      <div className="flex justify-around mx-5">
        <Allproducts handleSelectedProduct={handleSelectedProduct}></Allproducts>
        <CartContainer isActive={isActive} ></CartContainer>
      </div>
    </div>
  );
};

export default App;
