import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const onTitleClick = () => {};

const App = (props) => {
  const {offers, placeAmount} = props;

  return <Main offers={offers} placeAmount={placeAmount} onTitleClick={onTitleClick} />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    propertyName: PropTypes.string.isRequired,
    propertyType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })),
  placeAmount: PropTypes.number.isRequired
};

export default App;
