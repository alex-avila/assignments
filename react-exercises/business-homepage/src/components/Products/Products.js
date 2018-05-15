import React from 'react';

import Product from './Product/Product';

import './Products.css';

const Products = () => {
    return (
        <section className="products-section content-wrap">
            <h2>Products</h2>
            <div className="products">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="view-more">
                <p>View More >></p>
            </div>
        </section>
    );
};

export default Products;