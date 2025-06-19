import React from "react";
// import { MdDelete } from "react-icons/md";
const Cart = ({ product, handleRemoveProduct, selectedProduct }) => {
  const { id, title, price, description, category, image } = product;
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Most played songs this week
      </li>

      <li className="list-row">
        <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
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

      total:{" "}
      
    </ul>
  );
};

export default Cart;
