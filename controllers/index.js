const router = require("express").Router();

//import all api route files
const userApiRoutes = require('./api/user.api.routes')


//import all html route files here
// userHTMLRoutes = require("./html/user.html.routes");

//add api routes to the router
router.use("/api/user", userApiRoutes);

//add html routes to the router
// router.use("/user", userHTMLRoutes)

module.exports = router;