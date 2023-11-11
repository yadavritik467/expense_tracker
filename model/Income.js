import mongoose from "mongoose";
import moment from "moment";

const incomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    source: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: String,
        default: moment().format('YYYY-MM-DD-HH:mm:ss')
    },
    updatedAt: {
        type: String,
        default: moment().format('YYYY-MM-DD-HH:mm:ss')
    }
});

incomeSchema.pre('findOneAndUpdate', function(next) {
    this._update.updatedAt = moment().format('YYYY-MM-DD-HH:mm:ss');
    next();
});

export const Income = mongoose.model("Income", incomeSchema);
