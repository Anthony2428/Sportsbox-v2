const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class NBATeams extends Model {}
NBATeams.init(
  {
    TEAMID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    abreviatedName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    teamName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    wins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    losses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    homeWins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    awayWins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    homeLosses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    awayLosses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    confWins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    confLosses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    divisionWins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    divisionLosses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lastTenWins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lastTenLosses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gamesBack: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    streak: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    conference: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confRank: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    division: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    divisionRank: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    winPercent: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    pointPerGame: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    pointsAllowedPerGame: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    primaryColor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    secondaryColor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    logoURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'nbateam',
  }
);
module.exports = NBATeams;