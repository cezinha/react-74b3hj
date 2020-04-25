import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import '../style.css';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <AppBar title="APP" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <div>
          <div id="icon"></div>
          <div id="logo"></div>
        </div>
      </div>
    );
  }
}

export default Menu;