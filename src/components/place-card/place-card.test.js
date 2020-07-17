import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import offers from '../../mocks/test-offers.js';

describe(`PlaceCard`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<PlaceCard offer={offers[0]} onMouseLeave={() => {}} onMouseEnter={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
