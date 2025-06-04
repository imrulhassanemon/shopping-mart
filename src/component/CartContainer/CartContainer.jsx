import React from "react";
import Cart from "../Cart/Cart";
import About from "../About/About";

const CartContainer = ({handleIsActiveStatus, isActive}) => {
    
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions  justify-between">
            <button onClick={()=>handleIsActiveStatus('cart')} className={ isActive.cart? "btn px-10 py-1 bg-green-300  " : "btn px-10 py-1"}>
              Add to Cart
            </button>
            <button onClick={()=>handleIsActiveStatus('about')} className={ isActive.cart ==false ? "btn px-10 py-1 bg-green-300  " : "btn px-10 py-1"}>Info</button>
          </div>
        </div>
      </div>

      {isActive.cart? <Cart></Cart>:<About></About>}

    </div>
  );
};


export default CartContainer;
