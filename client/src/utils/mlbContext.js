import React from "react";

const MLBContext = React.createContext({
  away: {
    id: '',
    teamName: '',
    city: '',
    runs: '',
    hits: '',
    errors: '',
    wins: '',
    loss: '',
    probable_pitcher: {},
    logo: '',
  },
  home: {
    id: '',
    teamName: '',
    city: '',
    runs: '',
    hits: '',
    errors: '',
    wins: '',
    loss: '',
    probable_pitcher: {},
    logo: ''
  },
  game_id: '',
  status: '',
  scheduled: '',
});

export default MLBContext;