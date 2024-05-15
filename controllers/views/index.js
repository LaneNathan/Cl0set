const { User } = require("../../models");
const express = require('express');

const router = require("express").Router();

const app = express();
const PORT = 3001;




router.get("/", (req, res) => {
    // we COULD make the API request for data in our ROUTE/CONTROLLER

    // we can parse that returned data (images, title)

    // we can SEND the DATA in the CONTEXT OBJECT with the VIEW

    // let data = { title: "Bingo", username: "Bob" }
    // res.render("homepage", { viewData: data })
})

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = User.find(u => req.body.username === username && req.body.password === password);
    let signIn = false;

    if (user) {
        res.status(200).json({ message: 'Login successful', user });
        let signedIn = true;
        console.log(signedIn);

    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Home route Do we need?
router.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

app.use('/', router); // Using router in the application

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = router;