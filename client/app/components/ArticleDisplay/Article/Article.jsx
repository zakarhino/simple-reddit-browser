import React, { Component } from 'react';
import { Card } from 'react-materialize';

import styles from './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const article = this.props.article;
    return (
      <li>
        <img src={article.thumbnail}></img>
        <a href={`https://www.reddit.com${article.permalink}`}>{article.title}</a>
      </li>
    );
  }
}

module.exports = Article;