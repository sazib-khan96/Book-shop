import React from 'react';

const Product = ({product}) => {
    const {id,title,image,price, category,} = product
    return (
        <div>
            <img src={image} alt="" />
            <p>{category}</p>
            <h1>{title}</h1>
            <h4>${price}</h4>
            <button>Buy Now</button>
        </div>
    );
};

export default Product;