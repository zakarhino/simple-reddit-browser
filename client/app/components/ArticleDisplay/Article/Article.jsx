import React, { Component } from 'react';
import { CollectionItem, Badge } from 'react-materialize';

import styles from './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const article = this.props.article;
    return (
      <CollectionItem className="avatar" href={`https://www.reddit.com${article.permalink}`} >
        { article.thumbnail ? <img src={article.thumbnail} alt="" className="circle"/> : null }
        <Badge newIcon data-badge-caption="upvotes">{article.ups}</Badge>
        <span className={"title " + styles.title}>{article.title}</span>
        <p>Author: {article.author} <br />
         Comments: {article.num_comments}
        </p>
      </CollectionItem>
    );
  }
}

module.exports = Article;