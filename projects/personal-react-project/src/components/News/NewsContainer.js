import React, { Component } from 'react'

import { connect } from 'react-redux'

import NewsNavbar from './NewsNavbar';
import News from './News';
import withLoading from '../../shared/withLoading'

import './News.css'

const NewsWithLoading = withLoading(News)

class NewsContainer extends Component {
    render() {
        return (
            <div className="news__wrapper--outer">
                <div className="news__wrapper--general">
                    <NewsNavbar />
                    <div className="news__wrapper--general">
                        <NewsWithLoading articles={this.props.articles} isLoading={false}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({ articles: state.articles, isLoading: state.isNewsLoading }))(NewsContainer)