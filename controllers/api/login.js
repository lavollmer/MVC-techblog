const router = require('express').Router();
const User = require('../../models/User');

// route to login using async/await
router.post('/login', async (req, res) => {
  try {
    const userLoginData = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    // if login is correct will login, if not will send back error 
    if (userLoginData) {
      res.status(200).json(userLoginData)
    } else {
      res.status(400).json("User or password not correct.")
    }
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;