import React from 'react';
import { NavLink } from 'react-router';

const Product = ({product}) => {
    const {id,title,image,price, category,} = product
    return (
        <div className='p-5 h-3xl text-center mt-8 bg-gray-100 rounded-2xl'>
            <img src={image} alt="" className='w-[200px] h-[300px] mx-auto'  />
            <p className='my-3'>{category}</p>
            <h1>{title}</h1>
            <h4>${price}</h4>
            <NavLink to={`/products/${id}`}>
                <button className='my-btn'>Buy Now</button>
            </NavLink>
        </div>
    );
};

export default Product;