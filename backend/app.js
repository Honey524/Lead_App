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

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://honey02052004:Honey%402004@cluster0.zwiues0.mongodb.net/lead_scoring?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('MongoDB connection error:', error));
