const router = require('express').Router();
const campaignRoutes = require('./campaign-routes');

router.use('/campaigns', campaignRoutes);

module.exports = router;
