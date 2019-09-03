import express, { Request, Response } from 'express';
import channelsRoutes from './routes/channelsRoutes';

const app = express();

app.use(express.json());

// app.use('/', (req: Request, res: Response) => res.sendStatus(200));

app.use('/', channelsRoutes);

app.use('*', (req: Request, res: Response) => res.sendStatus(400));

app.listen('3001', (err: Error) => {
  if (err) {
    throw err;
  }

  console.log(`Server is listening on http://localhost:3001`);
});