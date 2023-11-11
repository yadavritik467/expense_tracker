import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';

// importing routes
import userRoutes from './routes/User.js'
import incomeRoutes from './routes/Income.js'
import expenseRoutes from './routes/Expense.js'
import { connectPassport } from './controller/User.js';

const app = express();
const port = 4500;


const MONGODB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yadavritik467:ritik23121999@cluster0.psqunil.mongodb.net/todo", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected db")
    } catch (error) {
        console.error(error.message);
    }
}
MONGODB();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'http://localhost:3000', // Update this to match your frontend's origin
        credentials: true,
    })
);




app.use(
    session({
        name: "google",
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false,httpOnly: true,sameSite: false,maxAge: 3600000}


    })
);

// Initialize Passport.js
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
connectPassport()


app.use("/api/v1", userRoutes);
app.use("/api/v1", incomeRoutes);
app.use("/api/v1", expenseRoutes);

app.get("/", (req, res) => {
    res.send("working");
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})