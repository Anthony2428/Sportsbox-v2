const sequelize = require('../config/connection');
const { MLBTeams, NBATeams } = require('../client/src/models');

const MLBteamsSeedData = require('./mlbTeamSeed.json');
const NBAteamsSeedData = require('./nbaTeamSeed.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const MLBteams = await MLBTeams.bulkCreate(MLBteamsSeedData);
  const NBAteams = await NBATeams.bulkCreate(NBAteamsSeedData);

  process.exit(1);
};

seedDatabase();