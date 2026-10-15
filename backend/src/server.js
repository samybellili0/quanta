import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import api from './routes/index.js';
import applications from './routes/applications.js';
import { notFound, errorHandler } from './middleware/errors.js';

const app = express();
app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(helmet());

// FRONTEND_URL can hold several origins separated by commas
const allowed = (process.env.FRONTEND_URL || 'http://localhost:5173')
  .split(',')
  .map((s) => s.trim().replace(/\/$/, ''))
  .filter(Boolean);
app.use(cors({ origin: allowed }));

app.use(express.json({ limit: '50kb' }));
app.use('/api/applications', applications);
app.use('/api', api);
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT || 5000, () => console.log('Quanta API ready'));
