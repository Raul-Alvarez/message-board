import { Router, Request, Response } from 'express';

const router = Router();

// const 

router.get('/channels', (req: Request, res: Response) => res.sendStatus(201));

router.get('/messages/:channel', (req: Request, res: Response) => res.sendStatus(202));

router.put('/:channel', (req: Request, res: Response) => res.sendStatus(203));

export default router;