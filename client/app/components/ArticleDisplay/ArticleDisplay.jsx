import React, { Component } from 'react';
import { ProgressBar } from 'react-materialize';
import Article from './Article/Article.jsx';

import styles from './ArticleDisplay.css';

class ArticleDisplay extends Component {
  constructor(props) {
    super(props);

    this.renderArticles = this.renderArticles.bind(this);
  }

  renderArticles() {
    return this.props.articles.map((article) => {
      return <Article key={article.data.id} article={article.data} />
    });
  }

  render() {
    console.log('rendered article display');
    if(!this.props.articles.length) {
      return (
        <ProgressBar />
      );
    } else {
      return (
        <div>
          {this.renderArticles()}
        </div>
      );
    }
  }
}

module.exports = ArticleDisplay;