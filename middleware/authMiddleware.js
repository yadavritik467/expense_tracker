
export const requireSignIn = async (req, res, next) => {

    try {
        // login panel
       if (req.cookies["google"]) {
            const token = req.cookies["google"];
            // console.log(token);
            if (!token) {
                return res.status(401).json({
                    message: "please login first",
                })
            }
            next();
        } 
    } catch (error) {
        console.log(error.message);
        res.status(501).json({ error: error })
    }
}