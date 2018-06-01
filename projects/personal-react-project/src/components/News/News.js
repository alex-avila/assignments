import React, { Component } from 'react'

import { connect } from 'react-redux'

import NewsItem from './NewsItem';

import './News.css'
import NewsNavbar from './NewsNavbar';


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
            <div className="news__wrapper--outer">
                <div className="news__wrapper--inner">
                    <NewsNavbar />
                    { mappedNews }
                </div>
            </div>
        );
    }
}

export default connect(state => ({ articles: state.articles }))(News)