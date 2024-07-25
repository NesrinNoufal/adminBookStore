import express from 'express';
import {addBook,getBooks,deleteBook,updateBook}  from '../controllers/booksController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/addBook' ,upload.single('coverImage'),addBook);
router.get('/getBooks' ,getBooks);
router.delete('/deleteBook' ,deleteBook);
router.put('/updateBook/:id' ,updateBook);

export default router;