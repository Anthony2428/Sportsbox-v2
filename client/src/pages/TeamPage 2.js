import React, {useEffect, useState} from "react";
import DataServices from "../utils/DataServices";
import MLBTeamsContext from "../utils/MLBTeamsContext";
import MLBPlayerContext from "../utils/MLBPlayerContext";
import NBAPlayerContext from "../utils/NBAPlayerContext";
import NBATeamsContext from "../utils/NBATeamsContext";
import NFLPlayerContext from "../utils/NFLPlayerContext";
import NFLTeamsContext from "../utils/NFLTeamsContext";
import NHLPlayerContext from "../utils/NHLPlayerContext";
import NHLTeamsContext from "../utils/NHLTeamsContext";
import Roster from "../components/Roster";
import TeamStats from "../components/TeamStats";
import TeamInjuries from "../components/TeamInjuries";
import TeamNews from "../components/TeamNews";

const handler = async (teamName, sport) => {
    const teamData = await DataServices.getOneTeam(teamName, sport).then(result => { 
        return result.data 
    })
    const rosterData = await DataServices.rosterHandler(teamData.abreviatedName, sport);

    return {teamData, rosterData};
};

const TeamPage = ({match}) => {
    let sport = match.params.sport;
    let teamName = match.params.teamName;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Team, setTeam] = useState([]);
    const [roster, setRoster] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
                const data = await handler(teamName, sport).then((res) => {
                    setTeam(res.teamData);
                    setRoster(res.rosterData);
                    return res;
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                });
                setIsLoaded(true);
    };
    fetchMyData();
        }, [match]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (sport === 'MLB') {
        return (
            <MLBTeamsContext.Provider value={Team}>
                <div style={{backgroundImage: `linear-gradient(180deg, #${Team.primaryColor}, #${Team.secondaryColor})`}}>
                    <div className="tile is-ancestor p-2">
                        <TeamStats Team={Team} sport={sport}/>
                       
                        <TeamNews />
                    </div>
                <MLBPlayerContext.Provider value={roster}>
                    <Roster Roster={roster} sport={sport} />
                </MLBPlayerContext.Provider>
                </div>
            </MLBTeamsContext.Provider>
        )
    } else if (sport === 'NBA') {
        return (
            <NBATeamsContext.Provider value={Team}>
                <div style={{backgroundImage: `linear-gradient(180deg, #${Team.primaryColor}, #${Team.secondaryColor})`, padding: "15px"}}>
                    <div className="tile is-ancestor p-2">
                        <TeamStats Team={Team} sport={sport}/>
                      
                        <TeamNews />
                    </div>
                <NBAPlayerContext.Provider value={roster}>
                    <Roster Roster={roster} sport={sport} />
                </NBAPlayerContext.Provider>
                </div>
            </NBATeamsContext.Provider>
        )
    } else if (sport === 'NFL') {
        return (
            <NFLTeamsContext.Provider value={Team}>
                <div style={{backgroundImage: `linear-gradient(180deg, #${Team.primaryColor}, #${Team.secondaryColor})`, padding: "15px"}}>
                    <div className="tile is-ancestor p-2">
                        <TeamStats Team={Team} sport={sport}/>
                       
                    </div>
                <NFLPlayerContext.Provider value={roster}>
                    <Roster Roster={roster} sport={sport} />
                </NFLPlayerContext.Provider>
                </div>
            </NFLTeamsContext.Provider>
        )
    } else if (sport === 'NHL') {
        return (
            <NHLTeamsContext.Provider value={Team}>
                <div style={{backgroundImage: `linear-gradient(180deg, #${Team.primaryColor}, #${Team.secondaryColor})`, padding: "15px"}}>
                    <div className="tile is-ancestor p-2">
                        <TeamStats Team={Team} sport={sport}/>
                        
                        <TeamNews />
                    </div>
                <NHLPlayerContext.Provider value={roster}>
                    <Roster Roster={roster} sport={sport} />
                </NHLPlayerContext.Provider>
                </div>
            </NHLTeamsContext.Provider>
        )
    }
};
export default TeamPage;