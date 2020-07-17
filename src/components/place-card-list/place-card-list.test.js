import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCardList from './place-card-list.jsx';
import offers from '../../mocks/test-offers.js';

describe(`PlaceCard`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<PlaceCardList offers={offers} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
