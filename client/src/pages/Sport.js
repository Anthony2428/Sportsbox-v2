<<<<<<< HEAD
import React from "react";
import Newsfeed from "../components/NewsFeed";

function Sport({match}) {

		return(
			<section className="section">
				<div className="container">
					<div className="mb-6 columns is-multiline is-centered">
						<div className="column is-8 has-text-centered">
							<h1 className="text-center">Welcome to SportsBox</h1>
							<h3 className="text-center">Here's the latest News!</h3>
						</div>
					</div>
					<Newsfeed sport={match.params.sport}/>
				</div>
			</section>
    	)
};
export default Sport;
=======
import React,{useState,useEffect}from "react";import Newsfeed from "../components/NewsFeed";function Sport({match}){return(<section class="section"><div class="container"><div class="mb-6 columns is-multiline is-centered"><div class="column is-8 has-text-centered"><h1 className="text-center">Welcome to SportsBox</h1><h3 className="text-center">Here's the latest News!</h3></div></div><Newsfeed sport={match.params.sport}/></div></section>)};export default Sport
>>>>>>> 09eceb2ec7c4877329cdcd3aaa9b0efe833ab6d9
