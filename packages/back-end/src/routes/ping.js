exports.pingGet = function(_req, res, next) {
    res.send('Pong!');
    return next();
};
