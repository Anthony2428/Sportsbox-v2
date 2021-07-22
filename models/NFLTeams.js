<<<<<<< HEAD
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
=======
const{Model,DataTypes}=require('sequelize');const sequelize=require('../config/connection');class NFLTeams extends Model{}
NFLTeams.init({TEAMID:{type:DataTypes.INTEGER,allowNull:!1,primaryKey:!0,},abreviatedName:{type:DataTypes.STRING,allowNull:!1,},city:{type:DataTypes.STRING,allowNull:!1,},teamName:{type:DataTypes.STRING,allowNull:!1,},conference:{type:DataTypes.STRING,allowNull:!1,},division:{type:DataTypes.STRING,allowNull:!1,},byeWeek:{type:DataTypes.INTEGER,allowNull:!1,},headCoach:{type:DataTypes.STRING,allowNull:!0,},offensiveCoordinator:{type:DataTypes.STRING,allowNull:!0,},defensiveCoordinator:{type:DataTypes.STRING,allowNull:!0,},primaryColor:{type:DataTypes.STRING,allowNull:!0,},secondaryColor:{type:DataTypes.STRING,allowNull:!0,},logoURL:{type:DataTypes.STRING,allowNull:!0,},wins:{type:DataTypes.INTEGER,allowNull:!1,},losses:{type:DataTypes.INTEGER,allowNull:!1,},ties:{type:DataTypes.INTEGER,allowNull:!1,},winPercent:{type:DataTypes.DOUBLE,allowNull:!1,},divisionWins:{type:DataTypes.INTEGER,allowNull:!1,},divisionLosses:{type:DataTypes.INTEGER,allowNull:!1,},confWins:{type:DataTypes.INTEGER,allowNull:!1,},confLosses:{type:DataTypes.INTEGER,allowNull:!1,},divisionTies:{type:DataTypes.INTEGER,allowNull:!1,},confTies:{type:DataTypes.INTEGER,allowNull:!1,},confRank:{type:DataTypes.INTEGER,allowNull:!1,},divisionRank:{type:DataTypes.INTEGER,allowNull:!1,},API_ID:{type:DataTypes.STRING,allowNull:!0,}},{sequelize,timestamps:!1,freezeTableName:!0,modelName:'nflteam',});module.exports=NFLTeams
>>>>>>> 09eceb2ec7c4877329cdcd3aaa9b0efe833ab6d9
