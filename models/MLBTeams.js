<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class MLBTeams extends Model {}

MLBTeams.init(
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
    wildCardGamesBack: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    league: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    wildCardRank: {
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
    modelName: 'mlbteams',
  }
);

module.exports = MLBTeams;
=======
const{Model,DataTypes}=require('sequelize');const sequelize=require('../config/connection');class MLBTeams extends Model{}
MLBTeams.init({TEAMID:{type:DataTypes.INTEGER,allowNull:!1,primaryKey:!0,},abreviatedName:{type:DataTypes.STRING,allowNull:!1,},city:{type:DataTypes.STRING,allowNull:!1,},teamName:{type:DataTypes.STRING,allowNull:!1,},wins:{type:DataTypes.INTEGER,allowNull:!1,},losses:{type:DataTypes.INTEGER,allowNull:!1,},homeWins:{type:DataTypes.INTEGER,allowNull:!1,},awayWins:{type:DataTypes.INTEGER,allowNull:!1,},homeLosses:{type:DataTypes.INTEGER,allowNull:!1,},awayLosses:{type:DataTypes.INTEGER,allowNull:!1,},divisionWins:{type:DataTypes.INTEGER,allowNull:!1,},divisionLosses:{type:DataTypes.INTEGER,allowNull:!1,},lastTenWins:{type:DataTypes.INTEGER,allowNull:!1,},lastTenLosses:{type:DataTypes.INTEGER,allowNull:!1,},gamesBack:{type:DataTypes.DOUBLE,allowNull:!1,},wildCardGamesBack:{type:DataTypes.DOUBLE,allowNull:!1,},league:{type:DataTypes.STRING,allowNull:!1,},wildCardRank:{type:DataTypes.INTEGER,allowNull:!1,},division:{type:DataTypes.STRING,allowNull:!1,},divisionRank:{type:DataTypes.INTEGER,allowNull:!1,},winPercent:{type:DataTypes.DOUBLE,allowNull:!1,},primaryColor:{type:DataTypes.STRING,allowNull:!0,},secondaryColor:{type:DataTypes.STRING,allowNull:!0,},logoURL:{type:DataTypes.STRING,allowNull:!0,},API_ID:{type:DataTypes.STRING,allowNull:!0,}},{sequelize,timestamps:!1,freezeTableName:!0,modelName:'mlbteams',});module.exports=MLBTeams
>>>>>>> 09eceb2ec7c4877329cdcd3aaa9b0efe833ab6d9
