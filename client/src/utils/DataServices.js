import axios from "axios";

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
  switch (sport) {
    case "mlb": {
      const roster = await getMLBRoster(teamName);
      return roster;
    }
    case "nba": {
      const roster = await getNBARoster(teamName);
      return roster;
    }
    case "nhl": {
      const roster = await getNHLRoster(teamName);
      return roster;
    }
    case "nfl": {
      const roster = await getNFLRoster(teamName);
      return roster;
    }
    default: {
      return;
    }
  }
};
const getNBAnews = async () => {
  const data = await fetch("https://fly.sportsdata.io/v3/nba/scores/json/News?key=9a108b6dad1848478e8b7308446476ea")
            .then(res => res.json())
            .then((result) => {
                result.map( (each) => {
                    return {
                      NewsID: each.NewsID,
                      Title: each.Title,
                      OriginalSourceUrl: each.OriginalSourceUrl,
                      OriginalSourceName: each.OriginalSource,
                      Team: each.Team,
                      TimeAgo: each.TimeAgo,
                      TermsOfUse: each.TermsOfUse,
                      Content: each.Content,
                    }
                });
                return result;
            });
    return data;
};
const getMLBnews = async () => {
  const data = await fetch("https://fly.sportsdata.io/v3/mlb/scores/json/News?key=027dbf7d0e4742bd9f2e30dd3d8f3f21")
              .then(res => res.json())
              .then((result) => {
                  result.map( (each) => {
                      return {
                        NewsID: each.NewsID,
                        Title: each.Title,
                        OriginalSourceUrl: each.OriginalSourceUrl,
                        OriginalSourceName: each.OriginalSource,
                        Team: each.Team,
                        TimeAgo: each.TimeAgo,
                        TermsOfUse: each.TermsOfUse,
                        Content: each.Content,
                      }
                  })
                  return result;
                })
    return data;
};
const getNFLnews = async () => {
  const data = await fetch("https://api.sportsdata.io/v3/nfl/scores/json/News?key=6b9975db45464fe29f7aa038ba65ec32")
              .then(res => res.json())
              .then((result) => {
                  result.map( (each) => {
                      return {
                        NewsID: each.NewsID,
                        Title: each.Title,
                        OriginalSourceUrl: each.OriginalSourceUrl,
                        OriginalSourceName: each.OriginalSource,
                        Team: each.Team,
                        TimeAgo: each.TimeAgo,
                        TermsOfUse: each.TermsOfUse,
                        Content: each.Content,
                      }
                  })
                  return result;
                });
    return data;
};
const getNHLnews = async () => {
  const data = await fetch("https://api.sportsdata.io/v3/nhl/scores/json/News?key=27d39d05cfaa48e79c18ba973cc03e01")
              .then(res => res.json())
              .then((result) => {
                  result.map( (each) => {
                      return {
                        NewsID: each.NewsID,
                        Title: each.Title,
                        OriginalSourceUrl: each.OriginalSourceUrl,
                        OriginalSourceName: each.OriginalSource,
                        Team: each.Team,
                        TimeAgo: each.TimeAgo,
                        TermsOfUse: each.TermsOfUse,
                        Content: each.Content,
                      }
                  })
                  return result;
                })
    return data;
};
const newsHandler = async (sport) => {
  console.log(sport)
  switch (sport) {
    case "mlb": {
      const news = await getMLBnews();
      return news;
    }
    case "nba": {
      const news = await getNBAnews();
      return news;
    }
    case "nhl": {
      const news = await getNHLnews();
      return news;
    }
    case "nfl": {
      const news = await getNFLnews();
      return news;
    }
    default: {
      console.log('Its running default');
      return;
    }
  }
};
const getAllTeams = async (sport) => {
  const data = await axios.get(`/api/${sport}/teams`);
  return data
};
const getOneTeam = async (teamName, sport) => {
  return await axios.get(`/api/${sport}/teams/${teamName}`);
};
const getTeamLogo = async (sport, teamName) => {
  return await axios.get(`api/${sport}/teams/logo/${teamName}`);
};



export default { rosterHandler, getAllTeams, getOneTeam, getTeamLogo, newsHandler };