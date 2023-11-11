import express from 'express';
import { createIncome, deleteIncome, getAllIncome, getMyIncome, updateIncome } from '../controller/Income.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/createIncome',requireSignIn,createIncome);
router.put('/updateIncome/:id',requireSignIn,updateIncome);
router.delete('/deleteIncome/:id',requireSignIn, deleteIncome);
router.get('/getIncome/:id',requireSignIn, getMyIncome);
router.get('/getAllIncome',requireSignIn, getAllIncome);

export default router;
