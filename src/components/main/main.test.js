import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import offers from '../../mocks/test-offers.js';

describe(`Main`, () => {
  it(`should render correctly with four places`, () => {
    const tree = renderer
      .create(<Main offers={offers} placeAmount={214} onTitleClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly with two places`, () => {
    const newPlaces = [offers[0], offers[2]];
    const tree = renderer
      .create(<Main offers={newPlaces} placeAmount={23} onTitleClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
