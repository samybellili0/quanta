import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import api from './routes/index.js';
import { notFound, errorHandler } from './middleware/errors.js';

const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(cors({ origin: ['https://www.quantaclubdz.com', 'https://quantaclubdz.com'] }));
app.use(express.json({ limit: '20kb' }));
app.use('/api', api);
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT || 5000, () => console.log('Quanta API ready'));
