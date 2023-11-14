const router = require('express').Router();
const { User } = require('../../models');

// route to login using async/await
router.post('/login', async (req, res) => {
  try {
    //find one User to match the username and password
    const userLoginData = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    //checking is userlogindata is tall there/incorrec
    if (!userLoginData) {
      //send back incorrect message
      res.status(400).json({ message: "Incorrect username or password" })
    }

    //check for valid password
    const validPassword = await userLoginData.checkPassword(req.body.password);

    //if incorrect password then send back incorrect message
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password. Please try again' })
    }

    //session storage
    req.session.save(() => {
      req.session.loggedIn = true;
      console.log(
        'File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );

      res.status(200).json({ username: userLoginData, message: "You are no logged in" })
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

//Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destory(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;