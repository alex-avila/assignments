import React from 'react';

const NewsCard = ({ title, description, url, author }) => {
    return (
        <a href={url} className="news__card" target="_blank">
            <h3 className="news__title">{title}</h3>
            <p className="news__author">{author}</p>
            <p className="news__description">{description}</p>
        </a>
    );
}

export default NewsCard;