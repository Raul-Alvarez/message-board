import React, { Component } from 'react';
import CSS from 'csstype';
import PropTypes from 'prop-types';
import Channel from '../../types/channel';

interface Props {
  channel: Channel;
}

interface State {

}
class ChannelItem extends Component<Props, State>{

  render(){
    return (
      <li>{this.props.channel.getChannelName}</li>
    )
  }
}

const channelItemStyle: CSS.Properties = {
  backgroundColor: 'blue',
  color: 'white;'
}

export default ChannelItem;