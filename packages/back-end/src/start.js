const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

app.listen(config.PORT, function() {
    logger.info(`Listening on port ${config.PORT}!`);
});
