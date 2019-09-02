import express, { Request, Response } from 'express';
import channels from './routes/channels';

const app = express();

// app.use()

// app.use('/', (req: Request, res: Response) => res.sendStatus(200));

app.use('/', channels);

app.listen('3001', (err: Error) => {
  if (err) {
    throw err;
  }

  console.log(`Server is listening on http://localhost:3000`);
});