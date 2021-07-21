import React from "react";
import logo from "../images/box/logo.png";

function Home() {
    return(
  <section style={{paddingBottom: "256px"}}>
  <div class="has-background-light" style={{paddingBottom: "256px"}}>
    <div class="section">
      <div class="container mb-5">
        <div class="columns is-multiline is-centered is-relative">
          <div class="column is-8 mb-6 has-text-centered">
            <h2 class="mb-6 is-size-1 is-size-3-mobile has-text-weight-bold">SportsBox Sports</h2>
            <p class="subtitle has-text-grey mb-6">Delivering Sports Entertainment to fans the Right Way!</p>
          </div>
          <div class="column is-8 is-relative">
            <img class="mx-auto px-4 image is-fullwidth" style={{position: "absolute", top: "0", left: "0", height: "512px", objectFit: "cover"}} src={logo} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)};

export default Home;