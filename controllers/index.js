const router = require('express').Router();
//const home = require("./homeRoute");
const MLBteamsRoute = require('./MLBteamsRoute');
const NBAteamsRoute = require('./NBAteamsRoute');
const userRoute = require('./api')

router.use('/api', userRoute);
router.use('/api/mlb', MLBteamsRoute);
router.use('/api/nba', NBAteamsRoute);
//router.use('/', home);

module.exports = router;