const { MLBTeams } = require('../models');
const router = require('express').Router();
//const isAuthenticated = require('../config/middleware/isAuthenticated');

// router.get('/teams/:TEAMID', async (req, res) => {
//   try {
//     const MLBteamData = await MLBTeam.findByPk(req.params.TEAMID);
    
//     if (!MLBteamData) {
//       res.status(404).json({ message: 'No MLB team found with this id!' });
//       return;
//     };
//     const MLBteam = MLBteamData.get({ plain: true });
//     res.status(200).render('MLBteampage', { MLBteam });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/teams', isAuthenticated, async (req, res) => {
//   try {

//     const NLData = await MLBTeam.findAll({ where: { league: 'NL' } });
//     const ALData = await MLBTeam.findAll({ where: { league: 'AL' } });
    
//     if (!NLData || !ALData) {
//       res.status(404).json(err);
//       return;
//     };

//     const AL = ALData.map((ALteam) =>
//       ALteam.get({ plain: true })
//     );
//     const NL = NLData.map((NLteam) =>
//       NLteam.get({ plain: true })
//     );

//     res.status(200).render('teams', { AL, NL } );
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/team/:teamName', async (req, res) => {
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
      const MLBteamData = await MLBTeams.findOne({where: { teamName: req.params.teamName } });
      
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