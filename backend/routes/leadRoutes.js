const express = require('express');
const router = express.Router();
const { scoreLead, getLeads } = require('../controllers/leadController');

// POST route for scoring a lead
router.post('/score', scoreLead);

// GET route for getting all leads
router.get('/leads', getLeads);

module.exports = router;
