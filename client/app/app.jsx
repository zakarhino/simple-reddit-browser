import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay.jsx';
import Menu from './components/Menu/Menu.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        keyword: ''
      },
      displayed: {
        subreddit: '',
        displayName: '',
        articles: []
      }
    }

    this.updateKeyword = this.updateKeyword.bind(this);
    this.searchForSubreddit();
  }

  updateKeyword(keyword) {
    this.setState({
      search: {
        ...this.state.search,
        keyword: keyword
      }
    });
    if(typeof keyword === "string") {
      searchForSubreddit(keyword);
    }
  }

  searchForSubreddit(board = '') {
    fetch(`/api/board/${board}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          displayed: {
            ...this.state.displayed,
            articles: data
          }
        });
        console.log(this.state);
      });
  }

  render() {
    return (
      <div>
        <Menu updateKeyword={this.updateKeyword} />
        <ArticleDisplay 
          subreddit={this.state.displayed.subreddit} 
          articles={this.state.displayed.articles}
          displayName={this.state.displayed.displayName} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('entry'));

module.exports = App;