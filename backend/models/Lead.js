const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  activity_count: Number,
  email_opens: Number,
  website_visits: Number,
  score: Number,
  segment: String,
});

module.exports = mongoose.model('Lead', leadSchema);
