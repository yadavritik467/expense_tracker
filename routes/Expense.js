import express from 'express';
import { createExpense, deleteExpense, getAllExpense, getMyExpense, updateExpense } from '../controller/Expense.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/createExpense',requireSignIn,createExpense);
router.put('/updateExpense/:id',requireSignIn,updateExpense);
router.delete('/deleteExpense/:id',requireSignIn, deleteExpense);
router.get('/getExpense/:id',requireSignIn, getMyExpense);
router.get('/getAllExpense',requireSignIn, getAllExpense);

export default router;
