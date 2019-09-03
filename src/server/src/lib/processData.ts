import Channel from './types/channel';
import Message from './types/message';

export function initializeData(): Channel[] {
  let channelArray: Channel[] = [];

  channelArray.push(new Channel('General'));
  channelArray.push(new Channel('Random'));

  return channelArray;
}

export function getAllChannels(inMemoryDatabase: Channel[]): string[] {
  try {
    return inMemoryDatabase.reduce((toUpdate: string[], currentValue: Channel): string[] => {
      return [...toUpdate, currentValue.getChannelName];
    }, []);
  } catch (e) {
    throw e;
  }
}

export function getAllMessagesFromChannel(inMemoryDatabase: Channel[], channel: string): Message[] {
  try {
    for (let i = 0; i < inMemoryDatabase.length; i++) {
      if (inMemoryDatabase[i].getChannelName === channel) {
        return inMemoryDatabase[i].getMessages;
      }
    }
  
    return [];
  } catch (e) {
    throw e;
  }
}

export function addMessageToChannel(inMemoryDatabase: Channel[], channel: string, messageText: string) {
  try {
    const newMessage = new Message(messageText);

    inMemoryDatabase.map((value: Channel) => {
      if (channel === value.getChannelName) {
        value.setMessage = newMessage;
      }

      return value;
    });
  } catch (e) {
    throw e;
  }
};