import React, {useEffect, useState} from "react";
import TeamCard from "../components/TeamCard";
import DataServices from "../utils/DataServices";
import NBATeamsContext from "../utils/NBATeamsContext";
import MLBTeamsContext from "../utils/MLBTeamsContext";
import NFLTeamsContext from "../utils/NFLTeamsContext";
import NHLTeamsContext from "../utils/NHLTeamsContext";

function Teams({match}) {
    let sport = match.params.sport;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allTeams, setAllTeams] = useState([]);

    useEffect(() => {
        const data = DataServices.getAllTeams(sport).then(result => { 
            return result.data 
        })
        .then(teams => {
            setIsLoaded(true);
            setAllTeams(teams);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })    
        }, []);
      
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (sport === "nba") {
        return (
            <NBATeamsContext.Provider value={{allTeams}}>
                <TeamCard team={allTeams} sport='nba'/>
            </NBATeamsContext.Provider>
        )
    } else if (sport === "nfl") {
        return (
            <NFLTeamsContext.Provider value={{allTeams}}>
                <TeamCard team={allTeams} sport="nfl"/>
            </NFLTeamsContext.Provider>
        )
    } else if (sport === "nhl") {
        return (
            <NHLTeamsContext.Provider value={{allTeams}}>
                <TeamCard team={allTeams} sport="nhl"/>
            </NHLTeamsContext.Provider>
        )
    } else if (sport === "mlb") {
    return (
        <MLBTeamsContext.Provider value={{allTeams}}>
            <TeamCard team={allTeams} sport="mlb"/>
        </MLBTeamsContext.Provider>
    )}
};
export default Teams;