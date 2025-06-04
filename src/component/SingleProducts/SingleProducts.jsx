import React from "react";

const SingleProducts = ({ product }) => {
  const { id, title, price, description, category, image } = product;
  console.log(id, title, price, description, category, image);

  console.log(product);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
            className="h-60 w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
