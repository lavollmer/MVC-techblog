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

    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (Err) {
    res.status(400).json(err);
  }
});