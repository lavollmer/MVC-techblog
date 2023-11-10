//requiring in express
const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path")
//import sequelize
const sequelize = require('./config/connection');

//name the PORT
const PORT = process.env.PORT || 3001;

//public folder is available 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Home page route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})

//after we have defined this route, any other routes that hit this file will be divided up
app.use("*", routes)

//safeguard: if we are in a production environment it should always equal false
const okToSync = (process.env.NODE_ENV === 'product') ? false : true;

// Connect to the database before starting the Express.js server
//force:okToSync telling sequelize to rebuild the tables
sequelize.sync({ force: okToSync }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});