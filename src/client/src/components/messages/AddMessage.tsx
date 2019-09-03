import React, { Component, FormEvent, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

interface Props {
  addNewMessage: Function;
  currentChannel: string
}

interface State {
  title: string
}
class AddMessage extends Component<Props, State> {
  state = {
    title: ''
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.addNewMessage(this.state.title, this.props.currentChannel);
    this.setState({ title: '' });
  }

  render(){
    return (
      <form
        style={{ display: 'flex' }}
        onSubmit={this.handleSubmit}
      >
        <input 
          type='text'
          name='text'
          style={{ flex: '10', padding: '5px' }}
          placeholder='New Message ...'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input 
          type='submit'
          value='submit'
          className='btn'
          style={{ flex: '1' }}
        />

      </form>
    )
  }
}

export default AddMessage;