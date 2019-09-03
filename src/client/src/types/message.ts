import uuid from 'uuid/v4';

class Message {
  id: string;
  text: string;
  createdTime: string;

  constructor(text: string) {
    if (text === null || text === "") {
      throw new Error('No message text provided');
    }

    this.id = uuid();
    this.text = text;
    this.createdTime = new Date().toISOString();
  }
}

export default Message;