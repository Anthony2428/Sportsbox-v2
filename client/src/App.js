import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavTabs from "./Router/components/NavTabs";
import Login from "./Router/components/pages/Login";
import News from "./Router/components/pages/News";
import Home from "./Router/components/pages/Home";
import Teams from "./Router/components/pages/Teams"

function App() {
  return (
    <Router>
      <div>
        <NavTabs/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/News" component={News} />
      <Route exact path="/Teams" component={Teams} />
      </div>
    </Router>
  );
};

export default App;
