import React, { Component } from 'react';

import styles from './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchterm: ''
    }

    this.search = this.search.bind(this);
  }

  search({ keyCode, target: { value }}) {
    this.setState({
      searchterm: value
    });
    if(keyCode == 13) {
      this.props.updateKeyword(this.state.searchterm);
    }
  }

  render() {
    return (
      <div className="input-field">
        <input id="search" type="search" required onKeyUp={this.search} />
        <label htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    )
  }
}

module.exports = SearchBar;