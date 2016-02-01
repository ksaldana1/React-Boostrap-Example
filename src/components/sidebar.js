import React from 'react';
import { Component } from 'react';

var divStyle = {
  'marginTop': '-32px',
  'fontSize': '14px',
  'border': '1px solid black',
  'padding': '0px',
  'height': '100%',
  'color': 'white',
  'overflow': 'hidden'
}

var contentLinksStyle = {
  'backgroundColor': 'rgba(0,64,64,0.5)',
  'color': 'black',
  'padding': '15px 10px 10px 10px'
}

var otherLinksStyle = {
  'backgroundColor': 'rgba(0,64,64,1)',
  'height': '100%',
  'padding': '15px 10px 10px 10px'
}

class Sidebar extends Component {
  render() {
    return (
      <div className='col-sm-2 col-lg-offset-1' style={divStyle}>
        <div style={contentLinksStyle}>
            Content A<br />
            Content B<br />
            Content C<br />
            Content D<br />
            Content E<br />
            Content F<br />
        </div>
        <div style={otherLinksStyle}>
            Internal Link 1<br />
            Internal Link 2<br />
            External Link 1<br />
        </div>
        </div>
    )
  }
}

export default Sidebar;
