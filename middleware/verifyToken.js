const jwt = require("jsonwebtoken");
const User = require("../v1/models/userModel");

module.exports = async (req, res, next) => {
    // console.log(req.headers.authorization.split(" ")?.[1]);
    try {
        const token = req.headers.authorization.split(" ")?.[1];
        if (!token) {
            return res.status(401).json("You are not login");
        }
        // console.log(token, "sajhbfk")
        // const decoded = await promisify(jwt.verify)(
        //     token,
        //     process.env.JWT_SECRET_KEY
        // );
        jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
            console.log(decoded, "sajhbfk") // bar
            console.log(err.message, "errerr")
        });

        console.log(decoded, "decoded?.email ")
        const user = await User.findOne({ email: decoded?.email });


        req.user = user
        next();
    } catch (error) {
        return res.status(403).json("Invalid token");
    }
};
