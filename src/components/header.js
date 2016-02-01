import React from 'react';
import { Component } from 'react';

var jumbotronStyle = {
  'backgroundColor': 'rgba(0,64,64,1)',
  'color': 'white',
  'fontSize': '30px',
  'textAlign': 'left',
  'height': '10%'
}

var userNameStyle = {
  'fontSize': '20px',
  'textAlign': 'right'
}

export default class Header extends Component {

  render() {
    return (
      <div className="jumbotron" style={jumbotronStyle}>
        <div className='row'>
          <h1 className='col-sm-6'>Company Name</h1>
          <p style={userNameStyle} className='col-sm-6'>User's Name</p>
        </div>
      </div>
    );
  }
}

