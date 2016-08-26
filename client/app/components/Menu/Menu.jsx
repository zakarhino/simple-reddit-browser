import React, { Component } from 'react';

import styles from './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { updateKeyword } = this.props;
    return (
      <div>
        menu display
      </div>
    )
  }
}

module.exports = Menu;