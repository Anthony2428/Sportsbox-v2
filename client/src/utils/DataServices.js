import http from "./http-common";

const getMLBRoster = async (teamName) => {
  const data = await fetch(`https://fly.sportsdata.io/v3/mlb/scores/json/Players/${teamName}?key=027dbf7d0e4742bd9f2e30dd3d8f3f21`)
        .then(res => res.json())
        .then(results => {
          let filteredResults = results.filter((player) => {
            if (player.Status === "Active") {
              return true;
            }
          });
          return filteredResults;
        });
  return data;
}
const getNBARoster = async (teamName) => {
  const data = await fetch(`https://fly.sportsdata.io/v3/nba/stats/json/Players/${teamName}?key=9a108b6dad1848478e8b7308446476ea`)
        .then(res => res.json())
        .then(results => {
          console.log(results)
          let filteredResults = results.filter((player) => {
            if (player.Status === "Active") {
              return true;
            }
          });
          return filteredResults;
        });
  return data;
}
const getNFLRoster = async (teamName) => {
  const data = await fetch(`https://fly.sportsdata.io/v3/nfl/scores/json/Players/${teamName}?key=6b9975db45464fe29f7aa038ba65ec32`)
        .then(res => res.json())
        .then(results => {
          let filteredResults = results.filter((player) => {
            if (player.DeclaredStatus !== true) {
              return true;
            }
          });
          return filteredResults;
        });
  return data;
}
const getNHLRoster = async (teamName) => {
  const data = await fetch(`https://fly.sportsdata.io/v3/nhl/scores/json/Players/${teamName}?key=27d39d05cfaa48e79c18ba973cc03e01`)
        .then(res => res.json())
        .then(results => {
          let filteredResults = results.filter((player) => {
            if (player.Status === "Active") {
              return true;
            }
          });
          return filteredResults;
        });
  return data;
}
const rosterHandler = async (teamName, sport) => {
  console.log(sport, teamName)
  switch (sport) {
    case "MLB": {
      const roster = await getMLBRoster(teamName);
      return roster;
    }
    case "NBA": {
      const roster = await getNBARoster(teamName);
      return roster;
    }
    case "NHL": {
      const roster = await getNHLRoster(teamName);
      return roster;
    }
    case "NFL": {
      const roster = await getNFLRoster(teamName);
      return roster;
    }
    default: {
      return;
    }
  }
};
const getAllTeams = async (sport) => {
  return await http.get(`/${sport}/teams`);
};
const getOneTeam = async (teamName, sport) => {
  return await http.get(`${sport}/team/${teamName}`);
};

const getTeamLogo = async (teamName) => {
  return await http.get(`mlb/teams/logo/${teamName}`);
};



export default { rosterHandler, getAllTeams, getOneTeam, getTeamLogo };