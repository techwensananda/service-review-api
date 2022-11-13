const User = require("../models/userModel");
const Review = require("../models/reviewModel");
const Service = require("../models/serviceModel");

exports.createReview = async (req, res) => {
    // console.log(req.body.email)

    try {
        const user = await User.findOne({ email: req.body.email })
        const serviceDetail = await Service.findById(req.params.id)
        console.log(user)
        if (user) {
            const review = await Review.create({
                ...req.body, servicepicture: serviceDetail.picture, username: user.name,

                userpicture: user.picture, servicename: serviceDetail.title, serviceid: req.params.id, userid: user.id
            })
            // console.log(review, "review")


            res.status(200).json({
                service: review,
                message: "Successfully create service"
            });
        } else {
            return res.status(500).json("error.message");
        }

        // res.status(200).send("ok")
        // if (review._id) {
        //     await Review.updateOne({
        //         _id: review._id
        //     }, {
        //         $push: {
        //             serviceids: req.params.id
        //         }
        //     })
        // }



        // console.log(newservice)

    } catch (error) {
        res.status(500).json(error.message);

    }
};


exports.getServiceReview = async (req, res) => {


    try {

        const review = await Review.find({ serviceid: req.params.id })

        res.status(200).json({
            review: review,
            message: "Successfully create review"
        });
    } catch (error) {
        res.status(500).json(error.message);

    }
};

exports.getMyReview = async (req, res) => {

    const user = await User.findOne({ email: req.params.email })

    try {

        const review = await Review.find({ userid: user._id })

        res.status(200).json({
            review: review,
            message: "Successfully create review"
        });
    } catch (error) {
        res.status(500).json(error.message);

    }
};

exports.deleteReview = async (req, res) => {


    try {

        await Review.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "Successfully delete review"
        });
    } catch (error) {
        res.status(500).json(error.message);

    }
};