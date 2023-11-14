const router = require('express').Router();
const User = require('../../models/User');

// route to create/add a user using async/await
router.post('/', async (req, res) => {
  try {
    const userSignupData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    // if the user is successfully created, the new response will be returned as json
    res.status(200).json(userSignupData)
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;