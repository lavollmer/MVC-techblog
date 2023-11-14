//code inspired by Activity 42 SOLVED folder (14 MVC)
//requiring necessary modules
//requiring express modules assigning to the router variable
const router = require('express').Router();
//requiring in user from models and assign to User
const { User } = require('../models');
//importing withAuth middleware from utils folder
const withAuth = require('../utils/auth');

//Non logged in user from viewing homepage (middleware withAuth)
router.get('/', withAuth, async (req, res) => {
  try {
    //await to return promise to findAll names
    const userDataLogin = await User.findAll({
      //specifies which column of User model should be used
      attributes: { exclude: ['password'] },
      //sort by name in ascending order
      order: [['name', 'ASC']],
    });

    //userDataLogin is returned with an array of objects --> get method is called on each object --> retrieve plain data values --> assigned to users variable
    // mapping over each item in the array with the get method and argument of plain value texts
    const users = userDataLogin.map((data) => data.get({ plain: true }));

    //render the homepage template with second argument of variables of users (plain text values) and loggedIn value
    res.render('homepage', {
      //users variable
      users,
      //logged in property with session logged in information
      loggedIn: req.session.loggedIn,
    });
    //try catch block for errors
  } catch (Err) {
    res.status(400).json(err);
  }
});

//GET request handler for login endpoint
router.get('/login', (req, res) => {
  //when GET is started, checks to see if session loggedIn property (if it exists)
  if (req.session.loggedIn) {
    //if exits, redirects to the / page
    res.redirect('/');
    return;
  }
  //if not logged in sends session to login view
  res.render('login');
})

//export the router object to other parts of the code
module.exports = router;