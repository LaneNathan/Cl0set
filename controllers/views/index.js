const router = require("express").Router();

router.get("/", (req, res) => {
    // we COULD make the API request for data in our ROUTE/CONTROLLER

    // we can parse that returned data (images, title)

    // we can SEND the DATA in the CONTEXT OBJECT with the VIEW

    // let data = { title: "Bingo", username: "Bob" }
    // res.render("homepage", { viewData: data })
})

router.get("/login", (req, res) => {
   
    res.render("login")
})

router.get("/createoutfit", (req, res) => {
   
    res.render("createoutfit")
})

module.exports = router;