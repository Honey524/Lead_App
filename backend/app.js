const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', leadRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/lead_scoring', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => console.error('MongoDB connection error:', error));
