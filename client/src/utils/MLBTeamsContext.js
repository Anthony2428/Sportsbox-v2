import React from "react";

const MLBTeamsContext = React.createContext({
  TEAMID: '',
  abreviatedName: '',
  city: '',
  teamName: '',
  wins: '',
  losses: '',
  homeWins: '',
  awayWins: '',
  homeLosses: '',
  awayLosses: '',
  divisionWins: '',
  divisionLosses: '',
  lastTenWins: '',
  lastTenLosses: '',
  gamesBack: '',
  wildCardGamesBack: '',
  league: '',
  wildCardRank: '',
  division: '',
  divisionRank: '',
  winPercent: '',
  primaryColor: '',
  secondaryColor: '',
  logoURL: ''
});

export default MLBTeamsContext;
