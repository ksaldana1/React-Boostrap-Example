import React from 'react';
import { Component } from 'react';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';

var containerStyle = {
  'height': '100%',
}

export default class App extends Component {
  render() {
    return (
      <div style={containerStyle}>
          <Header />
          <div className='container-fluid' style={containerStyle}>
            <div className='row' style={containerStyle}>
              <Sidebar />
              <Content />
            </div>
          </div>
      </div>

    );
  }
}
