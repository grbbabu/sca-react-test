const config = {
    PORT: process.env.PORT || 3100,
    X_AUTH_TOKEN_HEADER: process.env.X_AUTH_TOKEN_HEADER,
    X_AUTH_TOKEN: process.env.X_AUTH_TOKEN,
    SUBSCRIBE_API_URL: process.env.SUBSCRIBE_API_URL,
    SUBSCRIBE_AUTH_TOKEN: process.env.SUBSCRIBE_AUTH_TOKEN
};

module.exports = config;
