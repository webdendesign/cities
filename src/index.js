import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const places = [
  `Beautiful luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Private room`
];

const Settings = {
  PLACE_AMOUNT: 321
};

ReactDOM.render(<App places={places} placeAmount={Settings.PLACE_AMOUNT} />, document.querySelector(`#root`));
