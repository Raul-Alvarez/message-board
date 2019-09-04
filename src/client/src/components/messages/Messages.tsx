import React, { Component } from 'react';
import AddMessage from './AddMessage';
import CSS from 'csstype';
import Channel from '../../types/channel';
import Message from '../../types/message';
import MessageItem from './MessageItem';

interface Props {
  addNewMessage: Function;
  channels: Channel[];
  selectedChannel: string;
  messages: Message[]
}

interface State {

}

class Messages extends Component<Props, State> {
  render(){
    return (
      <div>
        <h3>{this.props.selectedChannel} Messages</h3>
        <div style={messageBoxStyle}>
          { this.props.selectedChannel ? 
              this.props.messages.map((message) => (
                <MessageItem
                  key={message.id}
                  message={message}
                />
              )) : <div></div>
        } 
        </div>
        <AddMessage 
          addNewMessage={this.props.addNewMessage}
          selectedChannel={this.props.selectedChannel}
        />
      </div>
    )
  }
}

const messageBoxStyle: CSS.Properties = {
  height: '800px',
  width: '500px',
  color: 'black'
}

export default Messages;