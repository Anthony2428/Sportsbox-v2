import React, {useState} from "react";
import Scores from "../components/Scores";

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

function Scoreboard() {
	const [date, setDate] = useState(today);
  
	const setScoreboardDate = (e) => {
		today = e.target.value;
		setDate(today);
		console.log(date)
	};
		return(
			<div className="font-mono bg-gray-400 mx-auto">
				<div className="container mx-auto flex justify-center flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
					<input type="date" onChange={setScoreboardDate.bind(this)} defaultValue={today} min="2021-04-01" max="2021-10-03" className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center" name="custom-input-number"/>
				</div>

					<div className="justify-center px-6 my-12">
						<Scores date={date} />
					</div>
				</div>
		)
};
export default Scoreboard; 