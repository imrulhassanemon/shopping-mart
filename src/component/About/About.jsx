import React from 'react';
import Cart from '../Cart/Cart';

const About = ({selectedProduct}) => {

    
    return (
        <div>
          <h1>This is the selected product</h1>
          {
            selectedProduct.map((product)=>{
              return <Cart key={product.id} product={product}></Cart>
            })
          }
        </div>
    );
};

export default About;