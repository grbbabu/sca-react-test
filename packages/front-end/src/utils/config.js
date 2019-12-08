const config = {
    PORT: process.env.REACT_APP_PORT || 3000,
    API_URL: process.env.REACT_APP_API_URL,
    X_AUTH_TOKEN_HEADER: process.env.REACT_APP_X_AUTH_TOKEN_HEADER,
    X_AUTH_TOKEN: process.env.REACT_APP_X_AUTH_TOKEN
};

export default config;
