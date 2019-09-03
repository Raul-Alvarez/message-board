import React, { Component } from 'react';
import CSS from 'csstype';
import Context from '../../context';
import Channel from '../../types/channel';
import ChannelItem from './ChannelItem';
import PropTypes from 'prop-types';

interface Props {
  channels: Channel[];
}

interface State {

}
class Channels extends Component<Props, State> {

  generateChannelItems = () => {
    this.props.channels.map((channel) => (
      <ChannelItem 
        channel={channel}
      />
    ))
  }
  render() {
    return (
      <div style={channelsStyle}>
        {this.generateChannelItems}
      </div>
    );
  }
}


const channelsStyle: CSS.Properties = {
  backgroundColor: '#3F0F3F',
  float: 'left',
  height: '1000px',
  width: '300px'

}
export default Channels;