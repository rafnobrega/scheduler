# Interview Scheduler

Interview Scheduler is a responsive single-page application (SPA) build with React. A user can book an interview in an empty appointment slot for a specific day of the week. The user can also edit or delete their appointment. 

- The data is persisted by the API server uing a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Jest and Cypress tests are used through the development of the project.

## Stack
```sh
React, Webpack, Babel, Axios, Storybook, Jest, Cypress, Classnames.
```
## Final Product
<p align="center">
Create a new appointment:
  <img 
    src="https://raw.githubusercontent.com/rafnobrega/scheduler/master/docs/Create%20new%20appointment.gif"
  >
</p>
<p align="center">
Delete an appointment:
  <img 
    src="https://raw.githubusercontent.com/rafnobrega/scheduler/master/docs/Delete%20an%20appointment.gif"
  >
</p>
<p align="center">
Edit an appointment:
  <img 
    src="https://raw.githubusercontent.com/rafnobrega/scheduler/master/docs/Edit%20an%20appointment.gif"
  >
</p>
<p align="center">
Form validations:
  <img 
    src="https://raw.githubusercontent.com/rafnobrega/scheduler/master/docs/Validations.gif"
  >
</p>


## Setup

- Fork this repository.
- Clone your repositiroy onto your local device.
- Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Interview Scheduler API PostgreSQL Database
Visit the repository below and follow the README.md file:
```sh
https://github.com/lighthouse-labs/scheduler-api
```

## Dependencies
    "axios": "^0.27.2",
    "classnames": "^2.2.6",
    "fsevents": "^1.2.9",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.0.0"

## DevDependecies
    "@babel/core": "^7.4.3",
    "@storybook/addon-actions": "^5.0.10",
    "@storybook/addon-backgrounds": "^5.0.10",
    "@storybook/addon-links": "^5.0.10",
    "@storybook/addons": "^5.0.10",
    "@storybook/react": "^5.0.10",
    "@testing-library/jest-dom": "^4.0.0",
    "@testing-library/react": "^8.0.7",
    "@testing-library/react-hooks": "^8.0.0",
    "babel-loader": "^8.0.5",
    "cypress": "^9.7.0",
    "node-sass": "npm:sass@^1.52.3",
    "prop-types": "^15.8.1",
    "react-test-renderer": "^16.9.0"