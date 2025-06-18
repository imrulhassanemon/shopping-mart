import React from "react";
import Cart from "../Cart/Cart";
import About from "../About/About";

const CartContainer = ({handleIsActiveStatus, selectedProduct, isActive}) => {
    
  return (
    <div>  
          
          <div className="card-actions  justify-between">
            <button onClick={()=>handleIsActiveStatus('cart')} className={ isActive.cart? "btn px-10 py-1 bg-green-300  " : "btn px-10 py-1"}>
              see added product
            </button>
            <button onClick={()=>handleIsActiveStatus('about')} className={ isActive.cart ==false ? "btn px-10 py-1 bg-green-300  " : "btn px-10 py-1"}>Info</button>
          </div>

      {isActive.cart? selectedProduct.map((product)=>{
              return <Cart key={product.id} product={product}></Cart>
            }):<About selectedProduct={selectedProduct}></About>}

    </div>
  );
};


export default CartContainer;
