import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from "./mocks/offers.js";

const Settings = {
  PLACE_AMOUNT: 321
};

ReactDOM.render(<App offers={offers} placeAmount={Settings.PLACE_AMOUNT} />, document.querySelector(`#root`));
