import React from 'react';

import './Product.css';

const Product = (props) => {
    return (
        <div className="product">
            <div className="product__image" style={props.image}></div>
            <div className="title-and-price">
                <div className="product__title">{props.title}</div>
                <span className="price-separator"></span>
                <div className="product__price">{props.price}</div>
            </div>
            <div className="product__description">
                {props.description}
            </div>
        </div>
    );
};

export default Product;