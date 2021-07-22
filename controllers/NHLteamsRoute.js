const { NHLTeams } = require('../models');
const router = require('express').Router();
//const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/teams/:teamName', async (req, res) => {
    try {
      const NHLteamData = await NHLTeams.findOne({where: { teamName: req.params.teamName } });
      
      if (!NHLteamData) {
        res.status(404).json({ message: 'No NHL Team found with this name!' });
        return;
      }
  
      res.status(200).json(NHLteamData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/teams/logo/:teamName', async (req, res) => {
    try {
      const NHLteamData = await NHLTeams.findOne({where: { abreviatedName: req.params.teamName } });
      
      if (!NHLteamData) {
        res.status(404).json({ message: 'No NHL Team found with this name!' });
        return;
      }
  
      res.status(200).json(NHLteamData.logoURL);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/teams', async (req, res) => {
    try {
      const NHLteamData = await NHLTeams.findAll();
  
      if (!NHLteamData) {
        res.status(404).json({ message: 'No NHL teams found!' });
        return;
      }
  
      res.status(200).json(NHLteamData);
    } catch (err) {
      res.status(500).json(err);
    }
});
module.exports = router;