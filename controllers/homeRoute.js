const router = require('express').Router();


router.get('/', async (req, res) => {
    res.render('homepage', {
    loggedIn: req.session.loggedIn
});
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn === true) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

router.get('/signup', (req, res) => {
    if (req.session.loggedIn === true) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });
  

module.exports = router;