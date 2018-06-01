import React, { Component } from 'react';

import NewsItem from './NewsItem'

class News extends Component {
    render() {
        const { articles } = this.props
        const mappedNews = articles.map((article, i) => {
            return (
                <NewsItem
                    key={article.title + i}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    author={article.author}
                />
            )
        })
        return (
            <div>
                { mappedNews }
            </div>
        );
    }
}

export default News