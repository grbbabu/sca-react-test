# README

## Prerequisites

1. Use node v12.13.1 or run `nvm use v12.13.1` if you manage node versions using nvm.
2. Run `npm install -g lerna` to install `lerna` globally.
3. Run command `npm run bootstrap` to install dependencies for `back-end` and `front-end` project.
4. Run the command `npm start` in the root folder to start both the `back-end` and `front-end` simultaneously.
5. The front-end runs in port 3000.
6. The back-end runs in port 3100.
7. Navigate to <http://localhost:3000> to view the app.

## Notes

1. The `.env` files have been committed into the repositories but usually they should not be committed to Git repositories and sensitive information should be part of vault keys in CI/CD. They have been supplied here to allow the project to be run locally without any additional configuration.

## TODOs

1. `back-end` could have used Express Router to manage routes.
2. `back-end` can use passport / OAUTH 2.0 / JWT to check validity of user sessions.
3. `back-end` can use Swagger or other API documentation tools to expose the API functionality.
4. `front-end` app can used a full fledged form validation library like Formik.
5. Story book for `front-end` components that can be used as design system as well.
6. Docker images could have been created for both `back-end` and `front-end`
7. `back-end` Server side rendering of React App for better SEO

## Self TODO before submission

1. Update README.md (both `back-end` and `front-end`)
