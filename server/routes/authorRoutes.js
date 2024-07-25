import express from 'express';
import {getAuthors,addAuthor} from '../controllers/authorController.js'

const router = express.Router();

router.get('/getAuthors', getAuthors);
router.post('/addAuthor',addAuthor);


export default router;