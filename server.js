//requiring in express
const express = require("express");
const router = require("express").Router();

// Sets up the Express App
const app = express();
const path = require('path');

//requiring in routes (controllers)
const routes = require("./controllers/index");

//setting up handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//import sequelize with connection db
const sequelize = require('./config/connection');

//name the PORT & set up for heroku to deploy
const PORT = process.env.PORT || 3001;

//public folder is available and middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Home page route
// router.get("/", async (req, res) => {
//   res.render('all');
// })

// any other routes that hit this file will be divided up
app.use(routes)

//rendering out homepage
app.get("/", async (req, res) => {
  res.render('homepage', { layout: 'main' })
});

// Connect to the database before starting the Express.js server
//force:okToSync telling sequelize to rebuild the tables
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


