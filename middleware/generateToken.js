const jwt = require("jsonwebtoken");

exports.generateToken = (userinfo) => {
    console.log(userinfo);
    const payload = {
        email: userinfo.email,


    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "20m",
    });
    return token;
};
