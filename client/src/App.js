import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import "./bulma.css";
import "./bulma.css.map"
import "./style.css"
import NavBar from "./components/NavBar";
import Login from "./pages/Login"
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import Signup from "./pages/Signup";
import Teams from "./pages/Teams";
import Sport from "./pages/Sport";

function App() {
  return (
    <Router>
        <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/:sport/teams/:teamName" component={TeamPage} />
                <Route exact path="/:sport" component={Sport} />
                <div class="tile is-ancestor is-flex-wrap-wrap is-justify-content-center is-align-content-center m-3">
                  <Route path="/:sport/teams" component={Teams} />
                </div>
            </Switch>
    </Router>
  );
};

export default App;
