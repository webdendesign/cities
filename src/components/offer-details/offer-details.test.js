import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetails from './offer-details';
import offers from '../../mocks/test-offers';

describe(`OfferDetails`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<OfferDetails offer={offers[0]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
