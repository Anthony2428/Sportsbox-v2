import React from "react";

const logo = require("../images/box/transparent.png");

function Signup() {
    return(
		<section className="section is-relative">
		<div className="container">
		  <div className="columns is-multiline">
			<div className="column is-6 is-4-desktop mb-5 mr-auto">
			  <div className="py-5 has-text-centered">
				<span className="has-text-grey-dark">Sign Up</span>
				<h3 className="mb-5 is-size-4 has-text-weight-bold">Create Your SportsBox Sports Account</h3>
				<div className="field">
				</div>
				<div className="field">
				  <div className="control">
					<input className="input mb-2" type="username" placeholder="Username"/>
				  </div>
				</div>
				<div className="field">
				  <div className="control">
					<input className="input mb-3" type="password" placeholder="Password"/>
				  </div>
				</div>
				<button className="button is-primary mb-3 is-fullwidth">Sign Up</button>
				<p className="has-text-grey-dark">
				  <span><small>Already have an account?</small></span>
				  <a href="/login">Sign In</a>
				</p>
			  </div>
			</div>
		  </div>
		</div>
		<div className="is-hidden-mobile is-hidden-desktop side-screen-touch" style={{backgroundImage: "url('../logos/default.png')"}}></div>
		<div className="is-hidden-touch side-screen-desktop" style={{backgroundImage: `url(${logo})`}}></div>
	  </section>
)};

export default Signup;