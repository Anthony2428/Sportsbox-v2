import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./pages/Login"
import News from "./pages/News";
import Home from "./pages/Home";
import Scoreboard from "./pages/Scoreboard";


function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/News" component={News} />
      <Route exact path="/Scoreboard" component={Scoreboard} />
      </div>
    </Router>
  );
};

export default App;
