import express from 'express';
import passport from 'passport';
import { logOut,  myProfile, } from '../controller/User.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

// router.post('/register',register);
// router.post('/login',login);

// --------------------------------------------------------- google authentication

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile","email"]
    }))

router.get("/google/callback", passport.authenticate('google',
 {  successRedirect: "http://localhost:3000",}),
//  {  successRedirect: "https://al-riz-food-store.onrender.com",}),
);

// --------------------------------------------------------- google authentication ends here

router.get('/me',requireSignIn, myProfile);
router.get('/logout',requireSignIn, logOut);

export default router;
