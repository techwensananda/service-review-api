const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    ratings: {
        type: String,
        required: [true, "Please provided a ratings of service"]
    },

    description: {
        type: String,
        required: [true, "Please provided a description of service"]
    },
    serviceid: {
        type: String,
        required: [true, "Please provided a description of service"]
    },
    username: {
        type: String,

    },
    servicepicture: {
        type: String,

    },
    userpicture: {
        type: String,

    },

    servicename: {
        type: String,

    },

    userid: {
        type: String,
        required: [true, "Please provided a description of service"]
    },



    // serviceids: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "Service",

    // }],


}, { timestamps: true })


const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;