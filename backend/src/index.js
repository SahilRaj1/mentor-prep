import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_output.json' assert { type: "json" };
import connectToMongo from './db.js';

import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

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

app.get('/', (req, res) => {
    res.send("<h1>Mentor Prep REST API</h1>")
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});