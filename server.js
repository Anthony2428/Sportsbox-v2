const path = require("path");
const express = require("express");
const cors = require("cors");
const passport = require('passport');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
const cookieParser = require('cookie-parser');
const routes = require('./controllers');

const sess = {
  secret:'super secret',
  cookie:{},
  resave:false,
  saveUninitialized:true,
  store:new SequelizeStore ({
    db:sequelize
  })

};
app.use(cors());
app.use(cookieParser('secret')); 
app.use(session(sess));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => { console.log(`🌎 ==> API server now on port ${PORT}!`)})
});
