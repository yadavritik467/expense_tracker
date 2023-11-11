import { Expense } from "../model/Expense.js";


export const createExpense = async (req, res) => {
    try {
           const {category,amount,description} = req.body;
           const expense = await Expense.create({
            userId:req.user._id,category,amount,description
           })

           return res.status(200).json({message:"Expense created",expense})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const updateExpense = async(req,res) =>{
    try {
        
        const expense = await Expense.findById(req.params.id);
        const {category,amount,description} = req.body;

        if(!expense){
            return res.status(404).json({message:"No expense data found"})
        }
         
        if(category){
          expense.category = category;
        }
        if(amount){
          expense.amount = amount;
        }
        if(description){
          expense.description = description;
        }
        await expense.save();
        return res.status(200).json({message:" expense data updated",expense});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



export const getAllExpense = async(req,res) =>{
    try {
        const expenseAll = await Expense.find({userId:req.user._id});
     
        let totalExpense = 0;

        expenseAll.forEach((i)=>{
            totalExpense += i.amount;
        })

        return res.status(200).json({totalExpense,expenseAll})

        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getMyExpense = async(req,res) =>{
    try {
        const expense = await Expense.findById(req.params.id);
         return res.status(200).json({expense});
       
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const deleteExpense = async(req,res) =>{
    try {
        await Expense.findByIdAndDelete(req.params.id);
        return res.status(200).json({message:"Expense data deleted"});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}