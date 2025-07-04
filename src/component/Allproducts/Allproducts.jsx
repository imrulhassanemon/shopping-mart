import React from "react";
import SingleProducts from "../SingleProducts/SingleProducts";

const Allproducts = ( {handleSelectedProduct} ) => {
  const [products, setProuducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProuducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>All products.jsx</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <SingleProducts handleSelectedProduct={handleSelectedProduct} key={product.id} product={product} ></SingleProducts>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
