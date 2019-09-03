import uuid from 'uuid/v4';
import Message from './message';

class Channel {
  private id: string;
  private name: string;
  private messages: Message[];

  public constructor(name: string) {
    if (name === null || name === "") {
      throw new Error('No channel name provided');
    }
    this.id = uuid();
    this.name = name;
    this.messages = new Array();
  }

  public get getChannelName(): string {
    return this.name;
  }

  public get getMessages(): Message[] {
    return this.messages;
  }

  public set setMessages(messages: Message[]) {
    this.messages = messages;
  }

  public set setMessage(message: Message) {
    this.messages.push(message);
  }
}

export default Channel;