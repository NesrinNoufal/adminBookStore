import express from 'express';
import {getLanguages,addLanguage} from '../controllers/languageController.js'

const router = express.Router();

router.get('/getLanguages', getLanguages);
router.post('/addLanguage',addLanguage);


export default router;