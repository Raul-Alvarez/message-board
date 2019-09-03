import { createContext }  from 'react';
import Channel from './types/channel';

const Context = createContext({
  channels: new Array<Channel>()
});

export default Context;