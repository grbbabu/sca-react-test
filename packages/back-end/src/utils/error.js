const logger = require('./logger');

function errorHandler(err, res) {
    logger.error(err);
    if (!res || !res.status || !res.json) {
        return;
    }
    if (err && err.code === 'ENOTFOUND') {
        res.status(404);
        res.json({ error: 'Not Found' });
        return;
    }
    if (err && err.isAxiosError) {
        const { status, statusText } = err.response;
        res.status(status);
        res.json({ error: statusText });
        return;
    }
    res.status(500);
    res.json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;
