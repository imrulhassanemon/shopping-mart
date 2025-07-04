import React, { useState } from "react";
// import { MdDelete } from "react-icons/md";
const Cart = ({ product, handleRemoveProduct, selectedProduct }) => {
  const { id, title, price, description, category, image } = product;;


  



  return (
    <ul className="list bg-base-100 rounded-box shadow-md mt-3">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Added Product to The Cart
      </li>


      <li className="list-row">
        <div className="text-4xl font-thin opacity-30 tabular-nums">{ }</div>
        <div>
          <img
            className="size-10 rounded-box"
            src={image}
          />
        </div>
        <div className="list-col-grow">
          <div>{title}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {category}
          </div>
        </div>
        <div>
          {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        </div>
        <button className="btn btn-square btn-ghost" onClick={() => handleRemoveProduct(id)}>
          {/* <MdDelete /> */} D
        </button>
      </li>

      
      
    </ul>
  );
};

export default Cart;
