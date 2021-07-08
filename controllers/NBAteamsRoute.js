const { NBATeams } = require('../models');
const router = require('express').Router();
//const isAuthenticated = require('../config/middleware/isAuthenticated');

// router.get('/teams/:TEAMID', async (req, res) => {
//   try {
//     const NBAteamData = await NBATeams.findByPk(req.params.TEAMID);
    
//     if (!NBAteamData) {
//       res.status(404).json({ message: 'No NBA team found with this id!' });
//       return;
//     };
//     const NBAteam = NBAteamData.get({ plain: true });
//     res.status(200).render('NBAteampage', { NBAteam });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/teams', isAuthenticated, async (req, res) => {
//   try {

//     const NLData = await NBATeams.findAll({ where: { league: 'NL' } });
//     const ALData = await NBATeams.findAll({ where: { league: 'AL' } });
    
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

router.get('/teams/:NBATEAMID', async (req, res) => {
    try {
      const NBAteamData = await NBATeams.findByPk(req.params.TEAMID);
  
      if (!NBAteamData) {
        res.status(404).json({ message: 'No NBA Team found with this id!' });
        return;
      }
  
      res.status(200).json(NBAteamData);
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