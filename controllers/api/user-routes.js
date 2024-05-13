const { Router } = require('express');

const { User } = require('../../models');

const userRoutes = Router();

userRoutes.post('/sign-up', async (req, res) => {
    console.log('testing post sign up user');
    console.log(req.body);

    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).send('Invalid values detected in sign up form!')
        return;
    }

    if (req.body.password !== req.body.confirmPassword) {
        res.status(400).send('Passwords do not match!')
        return;

    }

    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        console.log(newUser);
        res.status(200).json({message: `${req.body.name} was signed up!`})
    } catch (error) {
        res.status(500).send('Internal Server Error!')
    }
})




















module.exports = userRoutes