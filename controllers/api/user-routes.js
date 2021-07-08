const { User } = require('../../models');
const router = require('express').Router();
const passport = require('../../config/passport');
const bcryptjs = require('bcryptjs');

//this creates a new user 


router.post('/', async (req,res) => {
    try {
        User.create({
            email: req.body.email,
            password: req.body.password
          })
            .then(() => {
              const statusCode = 307;
              //once a user is created it saves them and logs them in
              req.session.save(() => {
                  req.session.loggedIn = true;
                  
                  //res.status(200).json(dbUserData);
                });
                res.redirect(statusCode, `/api/users/`);
            })
    } catch (err) {
        const unauthenticatedStatusCode = 401;
        res.status(unauthenticatedStatusCode).json(err);
    }   
});

//login 
router.post('/login', passport.authenticate('local'), async (req,res) =>{
    try {
        console.log("hello");
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({ message:'Welcome to sportsbox'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//this destroys the session the user was logged in as
router.post('/logout',(req,res) => {
    if (req.session.loggedIn) {
        req.logout();
        req.session.destroy();
    } else {
        res.status(404).end();
    };
    res.status(200).render('homepage');
});

module.exports = router;