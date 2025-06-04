import React from 'react';


const Allproducts = () => {

    const [products, setProuducts]  = React.useState([]);


    React.useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProuducts(data))
            .catch(err => console.error(err)); 
    },[])

    console.log(products);

    return (
        <div>
            <h1>All products.jsx</h1>
        </div>
    );
};

export default Allproducts;