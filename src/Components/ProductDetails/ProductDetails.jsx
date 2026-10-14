import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {
    const productDeatail = useLoaderData()
    const {id,title,image,price, category ,description, rating} = productDeatail
    return (


        <div className='flex gap-10 mt-8 w-5xl p-8 bg-gray-100 mx-auto'>
            
            <div>
                <h1>{id}</h1>
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className='text-3xl mt-3'>{title}</h1>
                <p className='py-5'>{category}</p>
                <p>{description}</p>
                <h3 className='py-5'>Taka {price}</h3>

               <div className='flex gap-3'>
                 <button className='my-btn'>Order Now</button>
                 <button className='border px-4'>Add to wishlist</button>
               </div>

            </div>
        </div>
    );
};

export default ProductDetails;