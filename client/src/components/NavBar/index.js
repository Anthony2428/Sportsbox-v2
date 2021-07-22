import React from "react";
//import logout from "../../utils/logout";
const logo = require("../../images/box/transparent.png");

function NavBar() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.

  return (
    <nav className="navbar py-4" style={{backgroundColor: "inherit"}}>
      <div className="container is-fluid">
        <div className="navbar-brand">
          <a className="navbar-item h-8" href="/">
            <img src={logo} alt="SportsBox Sports" />
          </a>
          <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu" id="target">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">MLB</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/mlb">News</a>
                <a className="navbar-item" href="/mlb/teams">Teams</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">NBA</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/nba">News</a>
                <a className="navbar-item" href="/nba/teams">Teams</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">NFL</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/nfl">News</a>
                <a className="navbar-item" href="/nfl/teams">Teams</a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">NHL</a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/nhl">News</a>
                <a className="navbar-item" href="/nhl/teams">Teams</a>
              </div>
            </div>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <a className="button" href="/login">Sign In</a>
              <a className="button is-primary" href="/signup">Sign Up</a></div>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;