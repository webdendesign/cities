import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import places from './mock/offers';

ReactDOM.render(<App placeAmount={321} places={places} />, document.querySelector(`#root`));
