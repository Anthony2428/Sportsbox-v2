import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "tailwindcss/tailwind.css"
import Nav from "./components/Nav";
import Newsfeed from "./pages/Newsfeed";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Newsfeed />
    </div>
  );
}


export default App;
