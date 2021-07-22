const { NFLTeams } = require('../models');
const router = require('express').Router();
//const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/teams/:teamName', async (req, res) => {
    try {
      const NFLteamData = await NFLTeams.findOne({where: { teamName: req.params.teamName } });
      
      if (!NFLteamData) {
        res.status(404).json({ message: 'No NFL Team found with this name!' });
        return;
      }
  
      res.status(200).json(NFLteamData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/teams/logo/:teamName', async (req, res) => {
    try {
      const NFLteamData = await NFLTeams.findOne({where: { abreviatedName: req.params.teamName } });
      
      if (!NFLteamData) {
        res.status(404).json({ message: 'No NFL Team found with this name!' });
        return;
      }
  
      res.status(200).json(NFLteamData.logoURL);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/teams', async (req, res) => {
    try {
      const NFLteamData = await NFLTeams.findAll();
  
      if (!NFLteamData) {
        res.status(404).json({ message: 'No NFL teams found!' });
        return;
      }
  
      res.status(200).json(NFLteamData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;