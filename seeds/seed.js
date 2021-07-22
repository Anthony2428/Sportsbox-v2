const sequelize = require('../config/connection');
const { MLBTeams, NBATeams, NFLTeams, NHLTeams } = require('../models');

const MLBteamsSeedData = require('./mlbTeamSeed.json');
const NBAteamsSeedData = require('./nbaTeamSeed.json');
const NFLteamsSeedData = require('./nflTeamSeed.json');
const NHLteamsSeedData = require('./nhlTeamSeed.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const MLBteams = await MLBTeams.bulkCreate(MLBteamsSeedData);
  const NFLteams = await NFLTeams.bulkCreate(NFLteamsSeedData);
  const NHLteams = await NHLTeams.bulkCreate(NHLteamsSeedData);
  const NBAteams = await NBATeams.bulkCreate(NBAteamsSeedData);

  process.exit(1);
};

seedDatabase();