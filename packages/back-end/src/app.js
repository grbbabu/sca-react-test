require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./utils/config');
const logger = require('./utils/logger');
const { pingGet } = require('./routes/ping');
const { subscribePost } = require('./routes/subscribe');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Auth token check
app.use(function(req, res, next) {
    const xAuthToken = req.headers && req.headers[config.X_AUTH_TOKEN_HEADER];
    if (req.url !== '/ping' && xAuthToken !== config.X_AUTH_TOKEN) {
        res.status(403).json({ error: 'No credentials sent!' });
        return next(new Error('No credentials sent!'));
    }
    return next();
});

// Health check
app.get('/ping', pingGet);

// TODO: Use express router when the number of endpoints increases with CRUD operations for each resource.
app.post('/subscribe', subscribePost);

process.on('unhandledRejection', function(err) {
    logger.error(err);
});

module.exports = app;
