# sca-react-test - Back End

This is the front end for the SCA React Test App. This API contains two end points:

1. GET /ping - To get the health of the APIs. You will receive a response 'Pong!', confirming the API health status.
2. POST /subscribe - To subscribe to SCA React App.

All the end points apart from the the `/ping` endpoint need `x-auth-header` to be sent with correct value to get response from APIs.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3100](http://localhost:3100) to view it in the browser.

Open [http://localhost:3100/ping](http://localhost:3100/ping)

### `npm run debug`

Open [chrome://inspect](chrome://inspect) to view it in the Chrome browser.
Click 'Open dedicated DevTools for Node' and start debugging by setting breakpoints

### `npm test`

Runs the tests in the application.

### `npm run lint`

Open [chrome://inspect](chrome://inspect) to view it in the Chrome browser.
Click 'Open dedicated DevTools for Node' and start debugging by setting breakpoints
