import React, { Component } from 'react';
import Message from '../../types/message';

interface Props {
  message: Message;
}

interface State {

}

class MessageItem extends Component<Props, State> {
  render(){
    return (
      <div>
        <p>{this.props.message.getMessageText}</p>
      </div>
    )
  }
}

export default MessageItem;