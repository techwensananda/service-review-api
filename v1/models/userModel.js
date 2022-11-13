const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please provided a title of service"]
    },
    email: {
        type: String,
        // required: [true, "Please provided  price of service"]
    },


    picture: {
        type: String,
    },



}, { timestamps: true })


const User = mongoose.model("User", userSchema);
module.exports = User;