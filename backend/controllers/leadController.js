const axios = require('axios');
const Lead = require('../models/Lead');

// POST: Score a new lead
exports.scoreLead = async (req, res) => {
  try {
    const leadData = req.body;

    const flaskPayload = {
      activity_count: leadData.activity_count,
      email_opens: leadData.email_opens,
      website_visits: leadData.website_visits,
    };

    const response = await axios.post('http://localhost:8000/score', flaskPayload);
    const score = response.data.score;
    const segment = segmentLead(score);

    // Save all fields
    const newLead = await Lead.create({
      name: leadData.name,
      email: leadData.email,
      company: leadData.company,
      activity_count: leadData.activity_count,
      email_opens: leadData.email_opens,
      website_visits: leadData.website_visits,
      score,
      segment,
    });

    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET: Retrieve all leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Helper function to segment lead
function segmentLead(score) {
  if (score > 0.7) return 'High';
  if (score > 0.4) return 'Medium';
  return 'Low';
}
