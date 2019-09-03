import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMessage from './AddMessage';
import CSS from 'csstype';

interface Props {
  addNewMessage: Function;
  currentChannel: string;
}

interface State {

}

class Messages extends Component<Props, State> {
  render(){
    return (
      <div>
        <h3>Messages</h3>
        <div style={messageBoxStyle}>

        </div>
        <AddMessage 
          addNewMessage={this.props.addNewMessage}
          currentChannel={this.props.currentChannel}
        />
      </div>
    )
  }
}

const messageBoxStyle: CSS.Properties = {
  height: '800px',
  width: '500px'
}

export default Messages;