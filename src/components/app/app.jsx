import React from 'react';
import PropTypes from "prop-types";
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesAmount} = props;
  return <Main placesAmount={placesAmount} />;
};

App.propTypes = {
  placesAmount: PropTypes.number.isRequired,
};

export default App;
