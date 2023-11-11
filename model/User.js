import moment from "moment";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true,  },
    email: { type: String, trim: true, unique: true,  },
    googleId:{ type: String,trim:true, },
   createdAt:{
    type:String,
   
   }
})

userSchema.pre('save', function(next) {
    const formattedDate = moment(this.createdAt).format('YYYY-MM-DD-HH:mm:ss');
    this.createdAt = formattedDate;
    next();
});

export const User = mongoose.model("User",userSchema);