import React, { Component } from 'react'

import { connect } from 'react-redux'

import NewsCard from './NewsCard';

import './News.css'


class News extends Component {
    render() {
        const { articles } = this.props
        const mappedNews = articles.map((article, i) => {
            return (
                <NewsCard
                    key={article.title + i}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    author={article.author}
                />
            )
        })
        return (
            <div className="news__wrapper--outer">
                <div className="news__wrapper--inner">
                    { mappedNews }
                </div>
            </div>
        );
    }
}

export default connect(state => ({ articles: state.articles }))(News)