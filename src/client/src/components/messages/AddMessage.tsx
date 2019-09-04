import React, { Component, FormEvent, ChangeEvent } from 'react';

interface Props {
  addNewMessage: Function;
  selectedChannel: string
}

interface State {
  textMessage: string
}

class AddMessage extends Component<Props, State> {
  state = {
    textMessage: ''
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({ textMessage: e.target.value })

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.addNewMessage(this.state.textMessage, this.props.selectedChannel);
    this.setState({ textMessage: '' });
  }

  render(){
    return (
      <form
        style={{ display: 'flex' }}
        onSubmit={this.handleSubmit.bind(this)}
        id='form1'
      >
        <input 
          type='text'
          name='text'
          style={{ flex: '10', padding: '5px' }}
          placeholder='New Message ...'
          value={this.state.textMessage}
          onChange={this.handleChange}
        />

        <button 
          type='submit'
          value='submit'
          className='btn'
          form='form1'
          disabled={!this.props.selectedChannel || !this.state.textMessage }
          style={{ flex: '1' }}
        >Submit</button>

      </form>
    )
  }
}

export default AddMessage;