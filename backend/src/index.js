import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToMongo from './db.js';

import authRouter from './routes/authRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connecting to Database
connectToMongo();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Available Routes
app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});