const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class NFLTeams extends Model {}
NFLTeams.init(
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
    conference: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    division: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    byeWeek: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    headCoach: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    offensiveCoordinator: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    defensiveCoordinator: {
        type: DataTypes.STRING,
        allowNull: true,
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
    wins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    losses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ties: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    winPercent: {
        type: DataTypes.DOUBLE,
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
    confWins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    confLosses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    divisionTies: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    confTies: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    confRank: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    divisionRank: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'nflteam',
  }
);
module.exports = NFLTeams;