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
  }

  updateKeyword(keyword) {
    this.setState({
      search: {
        keyword: keyword
      }
    });
    if(typeof keyword === "string") {
      searchForSubreddit(keyword);
    }
  }

  searchForSubreddit(board) {
    fetch(`/api/board/${board}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
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