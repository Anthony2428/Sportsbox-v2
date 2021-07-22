import React, {useState} from "react";

function Signup() {
	const [username, setUsername] = useState("");
  	const [password, setPassword] = useState("");

	  function validateForm() {
		return username.length > 0 && password.length > 0;
	  }

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch('/api/users',
		{
		  method: 'POST',
		  body: JSON.stringify({ username, password }),
		  headers: { 'Content-Type': 'application/json'},
		});
		if (response.ok) {
		  localStorage.setItem('username', username);
		  document.location.replace('/');
		} else {
		  localStorage.setItem('username', '');
		  alert('Failed to sign up.');
		}
	};
    return(
		<section style={{height: "100%"}}className="section is-relative">
		<div className="container">
		  <div className="columns is-multiline">
			<div className="column is-6 is-4-desktop mb-5 mr-auto">
			  <div className="py-5 has-text-centered">
			  <form onSubmit={handleSubmit}>
				<span className="has-text-grey-dark">Sign Up</span>
				<h3 className="mb-5 is-size-4 has-text-weight-bold">Create Your SportsBox Sports Account</h3>
				<div className="field">
				</div>
				<div className="field">
				  <div className="control">
					<input value={username} onChange={(e) => setUsername(e.target.value)} className="input mb-2" type="username" placeholder="Username"/>
				  </div>
				</div>
				<div className="field">
				  <div className="control">
					<input value={password} onChange={(e) => setPassword(e.target.value)} className="input mb-3" type="password" placeholder="Password"/>
				  </div>
				</div>
				<button disabled={!validateForm()} className="button is-primary mb-3 is-fullwidth">Sign Up</button>
				<p className="has-text-grey-dark">
				  <span><small>Already have an account?</small></span>
				  <a href="/login">Sign In</a>
				</p>
				</form>
			  </div>
			</div>
		  </div>
		</div>
		<div className="is-hidden-mobile is-hidden-desktop side-screen"></div>
		<div className="is-hidden-touch side-screen-touch"></div>
	  </section>
)};

export default Signup;