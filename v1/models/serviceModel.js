const mongoose = require("mongoose")

const serviceSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provided a title of service"]
    },
    price: {
        type: Number,
        required: [true, "Please provided  price of service"]
    },

    picture: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Please provided a description of service"]
    },
    userInfo: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true

    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "User",


    }],


}, { timestamps: true })


const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;