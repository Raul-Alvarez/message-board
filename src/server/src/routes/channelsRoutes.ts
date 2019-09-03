import { Router, Request, Response } from 'express';
import Channel from '../lib/types/channel';
import Message from '../lib/types/message';
import { checkChannelParam, checkMessageBody } from '../lib/middleware/channelMiddleware';
import { initializeData, getAllChannels, getAllMessagesFromChannel, addMessageToChannel } from '../lib/processData';

const router: Router = Router();

const inMemoryDatabase: Channel[] = initializeData();

router.get('/channels', (req: Request, res: Response) => {
  try {
    const channels: string[] = getAllChannels(inMemoryDatabase);

    res.status(200).json({ channels });
  } catch (e) {
    res.status(500).json({
      error: e
    });
  }
});

router.get('/messages/:channel', [checkChannelParam], (req: Request, res: Response) => {
  try {
    const { params: { channel } } = req;

    const messages: Message[] = getAllMessagesFromChannel(inMemoryDatabase, channel);

    res.status(200).json({
      messages,
      channel
    })
  } catch (e) {
    res.status(500).json({
      error: e
    });
  }
});

router.put('/:channel', [checkChannelParam, checkMessageBody], (req: Request, res: Response) => {
  try {
    const { body: { messageText }, params: { channel } } = req;

    addMessageToChannel(inMemoryDatabase, channel, messageText);
    
    res.sendStatus(201);
  } catch (e) {
    res.status(500).json({
      error: e
    });
  }
});

export default router;