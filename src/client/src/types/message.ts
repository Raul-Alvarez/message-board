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

  get getMessageId(): string {
    return this.id;
  }

  get getMessageText(): string {
    return this.text
  }

  public static createCopyMessageArray(messages: any[]): Message[] {
    const newArray: Message[] = [];
    messages.map((element: any) => {
      newArray.push(new Message(element.text));
    });

    return newArray;
  }
}

export default Message;