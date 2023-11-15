//code inspired by Activity 42 SOLVED folder (14 MVC)
//middleware with Auth
const withAuth = (req, res, next) => {
  //check if session logged In property is incorrect
  if (!req.session.loggedIn) {
    //redirect to login page
    res.redirect('/login');
  } else {
    //calls the next function
    next();
  }
};

//exports variable withAuth to other parts of the code
module.exports = withAuth;
