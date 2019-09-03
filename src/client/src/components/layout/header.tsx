import React from 'react';
import CSS from 'csstype';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1>Message Board</h1>
        </header>
      </div>
      
    )
  }
}

const headerStyle: CSS.Properties = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

export default Header;