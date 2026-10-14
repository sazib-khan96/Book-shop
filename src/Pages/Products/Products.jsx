import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../../Components/Product/Product';

const Products = () => {
    const products = useLoaderData()
    return (
        <div>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;