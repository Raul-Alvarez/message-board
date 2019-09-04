import React, { Component, MouseEvent } from 'react';
import CSS from 'csstype';
import Channel from '../../types/channel';

interface Props {
  channel: Channel;
  clickedChannel: Function;
}

interface State {

}
class ChannelItem extends Component<Props, State> {
  handleOnClick(e: MouseEvent<HTMLSpanElement>) {
    e.preventDefault();
    this.props.clickedChannel(this.props.channel);
  }

  render(){
    
    return (
      <div> 
        <span 
          style={channelItemStyle}
          onClick={this.handleOnClick.bind(this)}
        ># {this.props.channel.getChannelName}
        </span>
      </div>
    )
  }
}

let channelItemStyle: CSS.Properties = {
  color: 'white',
  fontSize: '20px',
  margin: '10px',
  cursor: 'auto'
  
}

export default ChannelItem;