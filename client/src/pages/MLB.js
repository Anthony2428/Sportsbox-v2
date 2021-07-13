import React from "react";
import Newsfeed from "../components/NewsFeed";

function MLB() {
    return(
		<div className="font-mono bg-gray-400 mx-auto">
			<div className="container mx-auto">
				<div className="justify-center px-6 my-12">
					<div className="w-full xl:w-3/4 lg:w-11/12">
							<Newsfeed />
					</div>
				</div>
			</div>
		</div>
    )
};
export default MLB;