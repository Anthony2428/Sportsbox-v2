import React from "react";
import logo from "../images/box/logo.png";

function Home() {
    return(
  <div style={{backgroundImage: `linear-gradient(180deg, #002D62, #fcc200)`, padding: "15px"}}>
      <div className="container mb-5">
        <div className="columns is-multiline is-centered is-relative">
          <div className="column is-8 mb-6 has-text-centered">
            <h2 className="mb-6 is-size-1 is-size-3-mobile has-text-weight-bold">SportsBox Sports</h2>
            <p className="subtitle mb-6" style={{color: "#002D62"}}>Delivering Sports Entertainment to fans the Right Way!</p>
          </div>
          <div className="column is-8 is-relative">
            <img className="mx-auto px-4 image is-fullwidth" style={{position: "absolute", top: "0", left: "0", height: "512px", objectFit: "cover"}} src={logo} alt=""/>
          </div>
        </div>
      </div>
  </div>
)};

export default Home;