import React from "react";

const NFLTeamsContext = React.createContext({
  TEAMID: '',
  abreviatedName: '',
  city: '',
  teamName: '',
  conference: '',
  division: '',
  headCoach: '',
  offensiveCoordinator: '',
  defensiveCoordinator: '',
  primaryColor: '',
  secondaryColor: '',
  logoURL: '',
  wins: '',
  losses: '',
  ties: '',
  winPercent: '',
  divisionWins: '',
  divisionLosses: '',
  confWins: '',
  confLosses: '',
  divisionTies: '',
  confTies: '',
  confRank: '',
  divisionRank: '',
  API_ID: ''
});

export default NFLTeamsContext;
