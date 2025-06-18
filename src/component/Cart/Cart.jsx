import React from "react";

const Cart = ({ product }) => {
  const { id, title, price, description, category, image } = product;

  console.log(product);
  return (
    <div className="card bg-base-100 w-96 shadow-sm border-2 border-gray-200">
      <figure>
        <img className="h-60 w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <button className="btn bg-amber-300">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
