import { Router, Request, Response, NextFunction } from 'express';

export function checkChannelParam(req: Request, res: Response, next: NextFunction) {
  try {
    const { params: { channel } } = req;

    if (channel !== undefined && channel !== null && channel !== '') {
      next();
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    throw e;
  }
}

export function checkMessageBody(req: Request, res: Response, next: NextFunction) {
  try {
    const { body: { messageText } } = req;

    if (messageText !== undefined && messageText !== null && messageText !== '') {
      next();
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    throw e;
  }
}