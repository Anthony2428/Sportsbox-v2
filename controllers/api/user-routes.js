const { User } = require('../../models');
const router = require('express').Router();
const passport = require('../../config/passport');

//this creates a new user 
router.post('/', async (req,res) => {
    try {
        const dbUserData = await User.create(req.body);
        //once a user is created it saves them and logs them in
              req.session.save(() => {
                  req.session.loggedIn = true;
                  req.session.user = dbUserData;
                // res.status(200).json(dbUserData);
                res.status(200).json({ message:'Welcome to SportsBox Sports'});

            });
    } catch (err) {
        console.log(err)
        const unauthenticatedStatusCode = 401;
        res.status(unauthenticatedStatusCode).json(err);
    }   
});

//login 
router.post('/login', passport.authenticate('local'), async (req, res) =>{
    try {
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user = req.user;
            res.status(200).json({ message:'Welcome to SportsBox Sports'});
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//this destroys the session the user was logged in as
router.post('/logout',(req,res) => {
    if (req.session.loggedIn === true) {
        req.session.destroy();
    } else {
        res.status(404).end();
    };
    res.status(200).render('homepage');
});

router.get('/', async (req,res) =>{
    try {
        const userData = await User.findAll()
        
        res.status(200).json({userData});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;