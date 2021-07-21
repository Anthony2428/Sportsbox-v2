import React, {useState, useEffect} from "react";
import Newsfeed from "../components/NewsFeed";

function Sport({match}) {

		return(
			<section class="section">
				<div class="container">
					<div class="mb-6 columns is-multiline is-centered">
						<div class="column is-8 has-text-centered">
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