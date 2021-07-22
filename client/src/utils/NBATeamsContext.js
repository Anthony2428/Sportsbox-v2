import React from "react";

const NBATeamsContext = React.createContext({
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
  confWins: '',
  confLosses: '',
  divisionWins: '',
  divisionLosses: '',
  lastTenWins: '',
  lastTenLosses: '',
  gamesBack: '',
  streak: '',
  conference: '',
  confRank: '',
  division: '',
  divisionRank: '',
  winPercent: '',
  pointPerGame: '',
  pointsAllowedPerGame: '',
  primaryColor: '',
  secondaryColor: '',
  logoURL: ''
});

export default NBATeamsContext;
