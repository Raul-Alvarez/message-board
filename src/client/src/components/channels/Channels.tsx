import React, { Component } from 'react';
import CSS from 'csstype';
import Channel from '../../types/channel';
import ChannelItem from './ChannelItem';

interface Props {
  channels: Channel[];
  clickedChannel: Function
}

interface State {

}
class Channels extends Component<Props, State> {
  render() {
    return (
      <div style={channelsStyle}>
        <h3 style={{ textAlign: 'center', color: 'white', paddingTop: '10px'}}>Channels</h3>
        {
          this.props.channels ?
            this.props.channels.map((channel) => (
              <ChannelItem 
                key={channel.getChannelId}
                channel={channel}
                clickedChannel={this.props.clickedChannel}
              />
            )) : <h4>No channels found</h4>
        }
      </div>
    );
  }
}


const channelsStyle: CSS.Properties = {
  backgroundColor: '#3F0F3F',
  float: 'left',
  height: '882px',
  width: '300px'

}
export default Channels;