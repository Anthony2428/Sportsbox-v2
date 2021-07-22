const { NBATeams } = require('../models');
const router = require('express').Router();
//const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/teams/:teamName', async (req, res) => {
  try {
    const NBAteamData = await NBATeams.findOne({where: { teamName: req.params.teamName } });
    
    if (!NBAteamData) {
      res.status(404).json({ message: 'No NBA Team found with this id!' });
      return;
    }

    res.status(200).json(NBAteamData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/teams/logo/:teamName', async (req, res) => {
  try {
    const NBAteamData = await NBATeams.findOne({where: { abreviatedName: req.params.teamName } });
    
    if (!NBAteamData) {
      res.status(404).json({ message: 'No NBA Team found with this id!' });
      return;
    }

    res.status(200).json(NBAteamData.logoURL);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/teams', async (req, res) => {
    try {
      const NBAteamData = await NBATeams.findAll();
  
      if (!NBAteamData) {
        res.status(404).json({ message: 'No NBA teams found!' });
        return;
      }
  
      res.status(200).json(NBAteamData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/teams/:TEAMID', async (req, res) => {
    try {
      const NBAteamData = await NBATeams.destroy({
        where: {
          TEAMID: req.params.TEAMID
        }
      });
  
      if (!NBAteamData) {
        res.status(404).json({ message: 'No NBA Team was found with this id.' });
        return;
      }
  
      res.status(200).json(NBAteamData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;