import React from "react";
import SingleProducts from "../SingleProducts/SingleProducts";

const Allproducts = ({ handleSelectedProduct, }) => {
  const [products, setProuducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProuducts(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(products);

  return (
    <div>
      <h1>All products.jsx</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <SingleProducts key={product.id} product={product} handleSelectedProduct={handleSelectedProduct} ></SingleProducts>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
