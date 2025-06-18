import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/header/navbar";
import Allproducts from "./component/Allproducts/Allproducts";
import CartContainer from "./component/CartContainer/CartContainer";
import toast from "react-hot-toast";

const App = () => {


  const [isActive, setActive] = useState({
    cart: NaN,
    status: "active",
  });



  const [selectedProduct, setSelectedProduct] = useState([])

  const handleSelectedProduct = (product) => {


    if(selectedProduct.find((item) => item.id === product.id)) {
      toast.error('This product is already in the cart')
      return;
    }

    setSelectedProduct([...selectedProduct, product])
    
  }




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


  return (
    <div>
      <Navbar  selectedProduct={selectedProduct}></Navbar>
      <div className="flex justify-around mx-5">
        <Allproducts handleSelectedProduct={handleSelectedProduct}></Allproducts>
        <CartContainer handleIsActiveStatus={handleIsActiveStatus} isActive={isActive} selectedProduct={selectedProduct} ></CartContainer>
      </div>
    </div>
  );
};

export default App;
