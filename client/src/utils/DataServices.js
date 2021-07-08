import http from "./http-common";

const getAllMLBTeams = async () => {
  return await http.get("/mlb/teams");
};

const getOneMLBTeam = async (teamName) => {
  return await http.get(`mlb/teams/${teamName}`);
};
const getTeamLogo = async (teamName) => {
  return await http.get(`mlb/teams/logo/${teamName}`);
};

const getALLNBATeams = async () => {
  return await http.get(`/nba/teams`);
};


export default { getALLNBATeams, getAllMLBTeams, getOneMLBTeam, getTeamLogo };