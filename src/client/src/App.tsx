import React, { Component } from 'react';
import axios from 'axios';

import Channels from './components/channels/Channels';
import Messages from './components/messages/Messages';

import './App.css';
// import Context from './context';
import Channel from './types/channel';
import Message from './types/message';
import Header from './components/layout/header';

class App extends Component {
  state = {
    channels: [new Channel('General'), new Channel('Random')],
    selectedChannel: ''
  }

  addNewMessage = (messageText: string, channelName: string) => {
    try {
      axios.put(`/${channelName}`, { messageText });

      const channelsCopy = this.state.channels.splice(0);

      channelsCopy.map((channel) => {
        if (channel.getChannelName === channelName) {
          channel.setMessage = new Message(messageText);
        }

        return channel;
      });

      this.setState({ channels: [...channelsCopy] })
      
    } catch (e) {
      throw e;
    }
  }

  clickedChannel = () => {

  }

  render(){
    return (
      <div className="App">
        <Header />
        <div>
          <Channels 
            channels={this.state.channels}
          />
          <Messages 
            addNewMessage={this.addNewMessage}
            currentChannel={this.state.selectedChannel}
          />
        </div>
      </div>
    )
  }
}

export default App;
