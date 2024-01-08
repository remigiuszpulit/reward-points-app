# Reward Points App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app fetches transaction data, calculates points collected by each customer and displays the data.

## Running the application

After cloning the repository, please first install the dependencies using

### `yarn install`

Once the process finishes, please check the `.env` file.
URL used by the api service can be configured there, and if the api usage should be mocked, please make sure this variable is set to MOCK

### 'REACT_APP_API_MODE=MOCK'


To run the application in the development mode please use

### `yarn start`

Now the app can be viewed by opening [http://localhost:3000](http://localhost:3000) in your browser.


## Configuration

When using mocked API, the error probability and time taken to complete the request can be set in the  `mockApi.js` file found in `config` folder.

This folder contains also the `points.js` file which configures the rules on how points are awarded for each transactions.

## Unit Testing

To run unit tests in interactive watch mode please use

### `yarn test`


## Production build

To create optimised production build in the `build` folder please use 

### `yarn build`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).