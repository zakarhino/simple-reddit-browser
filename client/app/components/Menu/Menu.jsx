import React, { Component } from 'react';
import { Navbar } from 'react-materialize';
import SearchBar from '../SearchBar/SearchBar.jsx';

import styles from './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { updateKeyword } = this.props;
    return (
      <Navbar>
        <SearchBar updateKeyword={updateKeyword}/>
      </Navbar>
    )
  }
}

module.exports = Menu;