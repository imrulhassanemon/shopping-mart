import React from "react";
import Cart from "../Cart/Cart";
import About from "../About/About";

const CartContainer = ({
  handleIsActiveStatus,
  handleRemoveProduct,
  selectedProduct,
  isActive,
}) => {
  return (
    <div>
      <div className="card-actions  justify-between">
        <button
          onClick={() => handleIsActiveStatus("cart")}
          className={
            isActive.cart ? "btn px-10 py-1 bg-green-300  " : "btn px-10 py-1"
          }
        >
          see added product
        </button>
        <button
          onClick={() => handleIsActiveStatus("about")}
          className={
            isActive.cart == false
              ? "btn px-10 py-1 bg-green-300  "
              : "btn px-10 py-1"
          }
        >
          Info
        </button>
      </div>

      {isActive.cart ? (
        selectedProduct.map((product) => {
          return (
            <Cart
              key={product.id}
              product={product}
              selectedProduct={selectedProduct}
              handleRemoveProduct={handleRemoveProduct}
            ></Cart>
          );
        })
      ) : (
        <About selectedProduct={selectedProduct}></About>
      )}
      <div className="text-center">
        {selectedProduct.length === 0 && (
          <h1 className="text-2xl font-bold">No product added</h1>
        )}
        </div>

<div>
        {selectedProduct.length > 0 && (
          <h1 className="text-2xl font-bold">
            Total:{" "}
            {
              selectedProduct.reduce((total, product) => total + product.price, 0).toLocaleString("en-US", {style: "currency", currency: "USD"})
            }
          </h1>
        )}
</div>

    </div>

    
  );
};

export default CartContainer;
