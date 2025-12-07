import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import connectDB from './config/db.js';
import authRoutes from './routes/authroutes.js';
import watchRoutes from './routes/authroutes.js';

dotenv.config();
connectDB();

const app = express();
const swaggerDocument = yaml.load('./api.yaml');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/auth', authRoutes);
app.use('/api/watches', watchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));