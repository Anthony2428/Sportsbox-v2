import React from "react";
const logo = require("../../logos/default.png");

function NavBar() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="a" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
            <div className="buttons">
              <a href="/" className="navbar-item button is-light">Home</a>
              <a href="/MLB/teams" className="navbar-item button is-light">MLB</a>
              <a href="/NBA/teams" className="navbar-item button is-light">NBA</a>
              <a href="/NFL/teams" className="navbar-item button is-light">NFL</a>
              <a href="/NHL/teams" className="navbar-item button is-light">NHL</a>
            </div>
          </div>
   
        <a className="navbar-item title is-2" style={{color: "royalblue", textAlign: "center"}}>SportsBox Sports</a>
        {/* <img className="navbar-item img" src={logo} /> */}
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a id='login' className="button is-danger">Log Out</a>
              <a className="button is-light" href="/login">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;