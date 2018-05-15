import React from 'react';

import './Product.css';

const Product = () => {
    return (
        <div className="product content-wrap">
            <div className="product__image"></div>
            <div className="product__title">Ipsum Lorem</div>
            <div className="product__description">
                Suspendisse rhoncus velit eget urna maximus, id rutrum lacus ornare. Nam luctus ultrices tellus, non mollis nunc porttitor sed.
            </div>
        </div>
    );
};

export default Product;