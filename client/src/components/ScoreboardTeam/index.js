import React from "react";
import ScoreboardLogo from '../ScoreboardLogo';


function ScoreboardTeam( {team, probablePitcher} ) {
    if (probablePitcher){

        return(
            <div key={team.id} className="text-center">
                <div className="py-3 px-6 whitespace-nowrap text-center">
                        <div className="items-center text-center">
                            <span className="font-medium justify-center">{team.city + ' ' + team.teamName}</span>
                        </div>
                       <ScoreboardLogo teamName={team.teamName}/>
                        <ul className="flex-col items-center justify-center">
                            <li>{probablePitcher.first_name + ' ' + probablePitcher.last_name}</li>
                            <li>{probablePitcher.win + '-' + probablePitcher.loss}</li>
                            <li>{probablePitcher.era}</li>
                        </ul>
                    </div>
            </div>
        )
    } else {
        return(
            <div key={team.id} className="text-center">
                <div className="py-3 px-6 whitespace-nowrap text-center">
                        <div className="items-center text-center">
                            <span className="font-medium justify-center">{team.city + ' ' + team.teamName}</span>
                        </div>
                       <ScoreboardLogo teamName={team.teamName}/>
                    </div>
            </div>
        )
    }
}

export default ScoreboardTeam;