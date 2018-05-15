import React from 'react';

import Product from './Product/Product';

import './Products.css';

const Products = () => {
    const propsArr = [
        {
            title: 'Apple Watch Series 1',
            price: '299.99',
            image: {
                background: 'url(https://images.unsplash.com/photo-1517502474097-f9b30659dadb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b8555084d047ae2977f61472f13eece&auto=format&fit=crop&w=582&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            },
            description: 'The 1st version of the Apple Watch. With a space gray band.'
        },
        {
            title: 'Apple Watch Series 2',
            price: '399.99',
            image: {
                background: 'url(https://images.unsplash.com/photo-1494858723852-d3cc2477e12c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a66c81d6441ca061f1e4647df4f41e40&auto=format&fit=crop&w=1656&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            },
            description: 'The 2nd version of the Apple Watch with a silver band.'
        },
        {
            title: 'Samsung Wear Watch',
            price: '199.99',
            image: {
                background: 'url(https://images.unsplash.com/photo-1522205987242-8e22924ab42a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0f679eb8f15705d46ea90008f39642b&auto=format&fit=crop&w=668&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            },
            description: 'The latest Samsung Wear Watch. Good for style and fitness.'
        },
    ]
    return (
        <section className="products-section content-wrap">
            <h2>Products</h2>
            <div className="products">
                {
                    propsArr.map((props, i) => {
                        return (
                            <Product 
                                key={i}
                                title={props.title}
                                price={props.price}
                                image={props.image}
                                description={props.description}
                            />
                        );
                    })
                }
            </div>
            <div className="view-more">
                <p>View More >></p>
            </div>
        </section>
    );
};

export default Products;