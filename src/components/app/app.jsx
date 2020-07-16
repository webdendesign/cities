import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const onTitleClick = () => {};

const App = (props) => {
  const {places, placeAmount} = props;

  return <Main places={places} placeAmount={placeAmount} onTitleClick={onTitleClick} />;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeAmount: PropTypes.number.isRequired
};

export default App;
