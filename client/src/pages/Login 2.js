import React, {useState} from "react";

function Login() {
	const [username, setUsername] = useState("");
  	const [password, setPassword] = useState("");

	  function validateForm() {
		return username.length > 0 && password.length > 0;
	  }

	const handleSubmit = async (event) => {
		event.preventDefault();
		  const response = await fetch('/api/users/login',  
		  {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json'},
		  });
	
		  if (response.ok) {
			localStorage.setItem('username', username);
			document.location.replace(`/`);
		  } else {
			localStorage.setItem('username', '');
			alert('Failed to log in.');
		  }
	};

    return(
		<section className="section is-relative">
		<div className="container">
			<div className="columns is-multiline">
			<div className="column is-6 is-4-desktop mb-5 mr-auto">
				<div>
				<div className="mx-auto py-5 has-text-centered">
					<form onSubmit={handleSubmit}>
					<span className="has-text-grey-dark">Sign In</span>
					<h3 className="mb-5 is-size-4 has-text-weight-bold">Join Sports Fans Just like You!</h3>
					<div className="field">
						<div className="control">
						<input value={username} onChange={(e) => setUsername(e.target.value)} className="input" type="username" placeholder="Username" />
						</div>
					</div>
					<div className="field">
						<div className="control">
						<input value={password} onChange={(e) => setPassword(e.target.value)} className="input" type="password" placeholder="Password" />
						</div>
					</div>
					<button type="submit" disabled={!validateForm()} className="button is-primary mb-4 is-fullwidth">Sign In</button>
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