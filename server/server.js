import express from 'express'
import bookRoutes from './routes/booksRoutes.js'
import authRoutes from './routes/authRoutes.js'
import authorRoutes from './routes/authorRoutes.js'
import languageRoutes from './routes/languageRoutes.js'
import cors from 'cors';
import connectToMongoDB from './db/connectToMongodb.js';
import multer from 'multer'
import {fileURLToPath} from 'url';
import path from 'path';

const app = express()

const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes)
app.use('/api/books',bookRoutes)
app.use('/api/author',authorRoutes)
app.use('/api/language',languageRoutes)

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`server running at port ${PORT}`);
})