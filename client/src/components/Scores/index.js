import React, {useState, useEffect} from "react";
import MLBContext from "../../utils/mlbContext";
import Scorecard from "../Scorecard";

function Scores({date}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allScores, setAllScores] = useState([]);
  let day = date.slice(5,7);
  let month = date.slice(8,10);
  useEffect(() => {
    fetch(`http://api.sportradar.us/mlb/trial/v7/en/games/2021/${day}/${month}/boxscore.json?api_key=ha5x9dwpctxwxbx22ut6kmem`)
          .then(res => res.json())  
          .then((result) => {
                const data = result.league.games.map( (each) => {
                    return {
                        away: {
                            id: each.game.away.id,
                            teamName: each.game.away.name,
                            city: each.game.away.market,
                            runs: each.game.away.runs,
                            hits: each.game.away.hits,
                            errors: each.game.away.errors,
                            wins: each.game.away.win,
                            loss: each.game.away.loss,
                            probable_pitcher: each.game.away.probable_pitcher,
                          },
                        home: {
                            id: each.game.home.id,
                            teamName: each.game.home.name,
                            city: each.game.home.market,
                            runs: each.game.home.runs,
                            hits: each.game.home.hits,
                            errors: each.game.home.errors,
                            wins: each.game.home.win,
                            loss: each.game.home.loss,
                            probable_pitcher: each.game.home.probable_pitcher,
                          },
                          game_id: each.game.id,
                          status: each.game.status,
                          scheduled: each.game.scheduled,
                    }
                });
                setIsLoaded(true);
                setAllScores(data);
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [day, month]);
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
    return (
      <div className="overflow-x-auto">
        <MLBContext.Provider value={{ allScores }}>
          <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
              <div className="w-full lg:w-5/6">
                  <Scorecard />
              </div>
          </div>
        </MLBContext.Provider>
      </div>
    )};
};
export default Scores;