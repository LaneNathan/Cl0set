const router = require("express").Router();


const viewsRoutes = require("./views")
const apiRoutes = require('./api');



routes.use('/api', apiRoutes);
router.use("/", viewsRoutes)



module.exports = router;