import React from 'react';

import './Product.css';

const Product = () => {
    return (
        <div className="product">
            <div className="product__image"></div>
            <div className="title-and-price">
                <div className="product__title">Ipsum Lorem</div>
                <span className="price-separator"></span>
                <div className="product__price">$9.99</div>
            </div>
            {/* <div className="product__description">
                Suspendisse rhoncus velit eget urna maximus, id rutrum lacus ornare.
            </div> */}
        </div>
    );
};

export default Product;