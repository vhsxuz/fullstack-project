import express from 'express';  
import dotenv from 'dotenv';
import db from './config/database.js';
import productRoutes from './routes/index.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

try {
    await db.authenticate();
    console.log('Successfully connected to database');
}
catch (err) {
    console.log('Error connecting database: ' + err);
}

app.use(express.json());
app.use(cors());
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});