const router = require("express").Router();

// const apiRoutes = require("./api")
const viewsRoutes = require("./views")


// router.use("/api", apiRoutes)
router.use("/", viewsRoutes)



module.exports = router;