import React from 'react';

import Product from './Product/Product';

import './Products.css';

const Products = () => {
    return (
        <section className="products">
            <Product />
            <Product />
            <Product />
        </section>
    );
};

export default Products;