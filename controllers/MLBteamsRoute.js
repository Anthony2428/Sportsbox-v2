const { MLBTeams } = require('../models');
const router = require('express').Router();

router.get('/teams/:teamName', async (req, res) => {
    try {
      const MLBteamData = await MLBTeams.findOne({where: { teamName: req.params.teamName } });
      
      if (!MLBteamData) {
        res.status(404).json({ message: 'No MLB Team found with this id!' });
        return;
      }
  
      res.status(200).json(MLBteamData);
    } catch (err) {
      res.status(500).json(err);
    }
}); 

router.get('/teams/logo/:teamName', async (req, res) => {
    try {
      const MLBteamData = await MLBTeams.findOne({where: { abreviatedName: req.params.teamName } });
      
      if (!MLBteamData) {
        res.status(404).json({ message: 'No MLB Team found with this id!' });
        return;
      }
  
      res.status(200).json(MLBteamData.logoURL);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/teams', async (req, res) => {
    try {
      const MLBteamData = await MLBTeams.findAll();
  
      if (!MLBteamData) {
        res.status(404).json({ message: 'No MLB teams found!' });
        return;
      }
  
      res.status(200).json(MLBteamData);
    } catch (err) {
      res.status(500).json(err);
    }
});
router.delete('/teams/:TEAMID', async (req, res) => {
    try {
      const MLBteamData = await MLBTeams.destroy({
        where: {
          TEAMID: req.params.TEAMID
        }
      });
  
      if (!MLBteamData) {
        res.status(404).json({ message: 'No MLB Team was found with this id.' });
        return;
      }
  
      res.status(200).json(MLBteamData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;