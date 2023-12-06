//requiring in express
const express = require('express');
const router = require('express').Router()
const app = express();
const path = require('path');

//requiring in routes (controllers)
const routes = require("./controllers");

//setting up handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Import express-session
const session = require('express-session');

//import sequelize with connection db
const sequelize = require('./config/connection');

//name the PORT & set up for heroku to deploy
const PORT = process.env.PORT || 3001;

//public folder is available and middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

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


