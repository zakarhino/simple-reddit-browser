import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay.jsx';
import Menu from './components/Menu/Menu.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      articles: [],
      subreddit: 'Front Page'
    }

    this.updateKeyword = this.updateKeyword.bind(this);
    this.searchForSubreddit();
  }

  updateKeyword(keyword) {
    this.setState({
      keyword: keyword || 'Front Page',
      articles: []
    });
    if(typeof keyword === "string") {
      this.searchForSubreddit(keyword);
    }
  }

  searchForSubreddit(board = '') {
    fetch(`/api/board/${board}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          articles: data,
          subreddit: this.state.keyword || 'Front Page'
        });
      });
  }

  render() {
    return (
      <div>
        <Menu updateKeyword={this.updateKeyword} />
        <ArticleDisplay 
          articles={this.state.articles}
          subreddit={this.state.subreddit} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('entry'));

module.exports = App;