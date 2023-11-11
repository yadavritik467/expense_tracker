import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from "../model/User.js";


export const connectPassport = (res) => {
    passport.use(new GoogleStrategy({
        session: false,
        clientID: "285934546391-iaafn2dno7fob1iql6kl7msqi0gd5phd.apps.googleusercontent.com",
        clientSecret: "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",
        // callbackURL: "https://al-riz-food-store.onrender.com/auth/google/callback",
        callbackURL: "http://localhost:4500/api/v1/google/callback",
        userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
        scope: ['profile', 'email'],
        passReqToCallback: true
    },
        async (req, res, accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({
                googleId: profile.id,
            })
            if (existingUser) {
                done(null, existingUser);
            } else {
                const newUser = await User.create({
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    secret: accessToken,
                });
                done(null, newUser);
            }
        }
    )
    )
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(async ( id, done) => {
        // console.log("user id=>",id,user)
        const user = await User.findById(id)
        done(null, user);
    })
}





export const myProfile = async (req, res) => {
    try {
        // for google
        if (req.cookies["google"]) {
            const user = await User.findById(req.user);
            // console.log(user)

            // console.log(req.user)
          
            return res.status(200).json({
                success: true,
                user
            });
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}


export const logOut = async (req, res) => {
    try {


        if (req.cookies["google"]) {
            req.session.destroy((err) => {
                if (err) {
                    console.error('Error destroying session:', err);
                }

                // Clear the userID cookie
                res.clearCookie('google');
                res.status(200).json({ message: "logout successfully" });
                // console.log("google  cookie cleared")

            });

        }


    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message, })
    }
}


