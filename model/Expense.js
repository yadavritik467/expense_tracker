import moment from "moment";
import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    createdAt: {
        type: String,
        default: moment().format('YYYY-MM-DD-HH:mm:ss')
    },
    updatedAt: {
        type: String,
        default: moment().format('YYYY-MM-DD-HH:mm:ss')
    }
})

expenseSchema.pre('findOneAndUpdate', function(next) {
    this._update.updatedAt = moment().format('YYYY-MM-DD-HH:mm:ss');
    next();
});

export const Expense = mongoose.model("expense",expenseSchema);