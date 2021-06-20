const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Project, Campaign, Item, ProjectItem } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/thankyou', (req, res) => {
    res.render('thankyou');
});

module.exports = router;
