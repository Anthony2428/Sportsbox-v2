import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import "./bulma.css";
import "./bulma.css.map"
import "./style.css"
import NavBar from "./components/NavBar";
import Login from "./pages/Login"
import News from "./pages/News";
import Home from "./pages/Home";
import Scoreboard from "./pages/Scoreboard";
import MLB from "./pages/MLB";
import NBA from "./pages/NBA";
import TeamPage from "./pages/TeamPage";
import Signup from "./pages/Signup";
import Teams from "./pages/Teams";

function App() {
  return (
    <Router>
        <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/News" component={News} />
                <Route exact path="/Scoreboard" component={Scoreboard} />
                <Route exact path="/MLB" component={MLB} />
                <Route exact path="/NBA" component={NBA} />
                <Route exact path="/:sport/teams/:teamName" component={TeamPage} />
                <div class="tile is-ancestor is-flex-wrap-wrap is-justify-content-center is-align-content-center m-3">
                  <Route path="/:sport/teams" component={Teams} />
                </div>
            </Switch>
    </Router>
  );
};

export default App;
