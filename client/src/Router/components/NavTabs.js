import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
  
  return (
    <ul className="nav nav-tabs">
      <li className="px-5 py-2">
        <a class="text-base leading-6 text-lightBlue-500 hover:text-lightBlue-500">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        </a>
      </li>
      <li className="px-5 py-2">
        <Link
          to="/News"
          className={location.pathname === "/News" ? "nav-link active" : "nav-link"}
        >
          News
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Teams"
          className={location.pathname === "/Teams" ? "nav-link active" : "nav-link"}
        >
          Teams
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li> */}
      {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li> */}
    </ul>
  );
}

export default NavTabs;