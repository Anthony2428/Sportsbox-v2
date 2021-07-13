import React, {useContext} from "react";
import ScoreboardTeam from "../ScoreboardTeam";
import Gamestats from "../GameStats";
import MLBContext from "../../utils/mlbContext";

function Scorecard() {
    
    const { allScores } = useContext(MLBContext);
    const allJSX = allScores.map(scores => {

            return(
                <div key={scores.game_id} className="grid grid-cols-8 gap-4 justify-center item-center mt-8 max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-2xl"> 
                    <div className="col-start-1 col-end-3 text-center">
                        <ScoreboardTeam team={scores.away} probablePitcher={scores.away.probable_pitcher}/>
                    </div>
                    <div className="col-start-3 flex items-center justify-center">
                        <Gamestats hits={scores.away.hits} runs={scores.away.runs} errors={scores.away.errors}/>
                    </div>
                    <div className="col-start-4 col-span-1 flex justify-center item-center">
                        <span className="py-32">vs.</span>
                    </div>
                        <Gamestats hits={scores.home.hits} runs={scores.home.runs} errors={scores.home.errors}/>
                    <div className="col-start-6 col-end-8 text-center">
                        <ScoreboardTeam team={scores.home} probablePitcher={scores.home.probable_pitcher}/>
                    </div>
            </div>
        )
    });
    return allJSX;
};

export default Scorecard;