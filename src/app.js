const express = require('express');
const accountRoutes = require('./routes/accountRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', accountRoutes);

module.exports = app;
