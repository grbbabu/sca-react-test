const axios = require('axios');
const errorHandler = require('../utils/error');
const config = require('../utils/config');

exports.subscribePost = async function(req, res, next) {
    try {
        const response = await axios.post(
            config.SUBSCRIBE_API_URL,
            {
                data: req.body
            },
            {
                headers: {
                    'x-auth': config.SUBSCRIBE_AUTH_TOKEN
                }
            }
        );
        const { data, state } = response.data;
        res.send({ data, state });
        return next();
    } catch (err) {
        errorHandler(err, res);
        return next(err);
    }
};
