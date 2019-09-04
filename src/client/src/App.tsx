import React, { Component } from 'react';
import axios from 'axios';

import Channels from './components/channels/Channels';
import Messages from './components/messages/Messages';

import './App.css';
import Channel from './types/channel';
import Message from './types/message';
import Header from './components/layout/header';


interface Props {

}

interface State {
  channels: Channel[];
  selectedChannel: string;
  messages: Message[]
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      channels: [],
      selectedChannel: '',
      messages: []
    }

    this.addNewMessage = this.addNewMessage.bind(this);
    this.clickedChannel = this.clickedChannel.bind(this);
  }

  async componentWillMount () {
    const { data: { channels } } = await axios.get(`/channels`);

    this.setState({
      channels: [new Channel(channels[0]), new Channel(channels[1])],
      selectedChannel: '',
      messages: []
    })
  }

  addNewMessage = (messageText: string, channelName: string) => {
    try {
      // No need to await since this action is independent of front end data state updates
      axios.put(`/${channelName}`, { messageText });

      // Update messages state
      const messagesCopy = this.state.messages.splice(0);
      const newMessage: Message = new Message(messageText);
      messagesCopy.push(newMessage);

      // Update channels state
      const channelsCopy = this.state.channels.splice(0);
      channelsCopy.map((channel) => {
        if (channel.getChannelName === channelName) {
          channel.setMessage = new Message(messageText);
        }

        return channel;
      });

      this.setState({
        channels: [...channelsCopy], 
        messages: [...messagesCopy]
      })
      
    } catch (e) {
      throw e;
    }
  }

  async clickedChannel (channel: Channel) {
    const { data: { messages } } = await axios.get(`/messages/${channel.getChannelName}`);

    const newMessageArray: Message[] = Message.createCopyMessageArray(messages);

    console.log(newMessageArray);
    console.log(channel.getChannelName)
    this.setState({
      selectedChannel: channel.getChannelName,
      messages: newMessageArray, 
    });
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div>
          <Channels 
            channels={this.state.channels}
            clickedChannel={this.clickedChannel}
          />
          <Messages 
            addNewMessage={this.addNewMessage}
            channels={this.state.channels}
            selectedChannel={this.state.selectedChannel}
            messages={this.state.messages}
          />
        </div>
      </div>
    )
  }
}

export default App;
