import React from "react";

const NHLTeamsContext = React.createContext({
  TEAMID: '',
  abreviatedName: '',
  city: '',
  teamName: '',
  conference: '',
  division: '',
  primaryColor: '',
  secondaryColor: '',
  logoURL: '',
  wins: '',
  losses: '',
  overtimeLosses: '',
  winPercent: '',
  confWins: '',
  confLosses: '',
  divisionWins: '',
  divisionLosses: '',
  shutoutWins: '',
  divisionRank: '',
  API_ID: ''
});

export default NHLTeamsContext;
