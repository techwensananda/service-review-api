const Service = require("../models/serviceModel");
const User = require("../models/userModel");

exports.createService = async (req, res) => {

    const
        {
            title,
            price,
            description,
            picture,
            email
        } = req.body;
    try {

        const user = await User.findOne({ email: email })
        console.log(user._id)
        const newservice = await Service.create({
            title,
            price,
            picture,
            description,
            userInfo: user._id
        })
        // console.log(newservice)
        res.status(200).json({
            service: newservice,
            message: "Successfully create service"
        });
    } catch (error) {
        res.status(500).json(error.message);

    }
};

exports.getAllServices = async (req, res) => {


    try {

        const services = await Service.find({})

        res.status(200).json({
            service: services,
            message: "Successfully create service"
        });
    } catch (error) {
        res.status(500).json(error.message);

    }
};
exports.getService = async (req, res) => {


    try {

        const service = await Service.findById(req.params.id)

        res.status(200).json({
            service: service,
            message: "Successfully create service"
        });
    } catch (error) {
        res.status(500).json(error.message);

    }
};
exports.postLikes = async (req, res) => {


    try {

        const service = await Service.findById(req.params.id)
        const user = await User.findOne({ email: req.body.email })
        await Service.updateOne({
            _id: service._id
        }, {
            $push: {
                reviews: user._id
            }
        })
        res.status(200).json({
            service: service,
            message: "Successfully create service"
        });
    } catch (error) {
        res.status(500).json(error.message);

    }
};
