const express = require('express')
const { generateToken } = require('../../middleware/generateToken');
const User = require('../models/userModel');
const router = express.Router()

router.post('/login', async (req, res) => {

    try {
        const token = await generateToken(req.body);
        if (!token) {
            return res.status(500).json("Wrong username or password");

        } else {

            res.status(200).json({
                token,
                message: "Successfully get token"
            });

        }

    } catch (error) {

        res.status(500).json("Wrong username or password");
    }
})
router.post('/register', async (req, res) => {

    try {
        const user = await User.create(req.body)
        res.status(200).json({
            user,
            message: "Successfully User Create"
        });

    } catch (error) {

        res.status(500).json("Wrong username or password");
    }
})

module.exports = router