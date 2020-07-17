import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import offers from '../../mocks/test-offers.js';

describe(`App`, () => {
  it(`renderer correctly`, () => {
    const tree = renderer
      .create(<App offers={offers} placeAmount={14} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

