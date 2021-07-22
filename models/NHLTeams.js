const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class NHLTeams extends Model {}
NHLTeams.init(
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
    overtimeLosses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    winPercent: {
        type: DataTypes.DOUBLE,
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
    shutoutWins: {
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
    modelName: 'nhlteam',
  }
);
module.exports = NHLTeams;