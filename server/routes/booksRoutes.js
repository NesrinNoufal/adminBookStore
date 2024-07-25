import express from 'express';
import multer from 'multer';
import {addBook,getBooks,deleteBook,updateBook}  from '../controllers/booksController.js';
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
const upload = multer({ storage: storage });

const router = express.Router();

// upload.single('coverImage')

router.post('/addBook' ,addBook);
router.get('/getBooks' ,getBooks);
router.delete('/deleteBook' ,deleteBook);
router.put('/updateBook/:id' ,updateBook);

export default router;