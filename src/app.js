const express = require('express');
const accountRoutes = require('./routes/accountRoutes');
const bankRoutes = require('./routes/banksRoutes');


const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', accountRoutes);
app.use('/api', bankRoutes);

module.exports = app;
