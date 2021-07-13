import React from "react";

function Login() {
    return(
		<section className="section is-relative">
		<div className="container">
			<div className="columns is-multiline">
			<div className="column is-6 is-4-desktop mb-5 mr-auto">
				<div>
				<div className="mx-auto py-5 has-text-centered">
					<form action="#">
					<span className="has-text-grey-dark">Sign In</span>
					<h3 className="mb-5 is-size-4 has-text-weight-bold">Join Sports Fans Just like You!</h3>
					<div className="field">
						<div className="control">
						<input className="input" type="username" placeholder="Username" />
						</div>
					</div>
					<div className="field">
						<div className="control">
						<input className="input" type="password" placeholder="Password" />
						</div>
					</div>
					<button className="button is-primary mb-4 is-fullwidth">Get Started</button>
					<a className="mb-5 is-inline-block" href="#"><small>Forgot password?</small></a>
					</form>
				</div>
				</div>
			</div>
			</div>
		</div>
		<div className="is-hidden-mobile is-hidden-desktop side-screen"></div>
		<div className="is-hidden-touch side-screen-touch"></div>
		</section>
)};

export default Login;