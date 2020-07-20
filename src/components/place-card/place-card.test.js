import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import PlaceCard from './place-card';
import offers from '../../mocks/test-offers';

describe(`PlaceCard`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<MemoryRouter>
        <PlaceCard offer={offers[0]} onMouseLeave={() => {}} onMouseEnter={() => {}} />
      </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
