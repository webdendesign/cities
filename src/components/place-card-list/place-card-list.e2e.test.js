import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCardList from './place-card-list.jsx';
import offers from '../../mocks/test-offers.js';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlaceCardList`, () => {
  test(`When user hovers one of the cards from list, its activeCard value in state should change from null to place object from this card`, () => {
    const wrapper = mount(<PlaceCardList offers={offers} />);

    expect(wrapper.state().activeCard).toBe(null);
    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseEnter`);
    expect(wrapper.state().activeCard).toEqual(offers[2]);
  });

  test(`When user stops hover one of the cards from list, its activeCard value in state should return from place object to null`, () => {
    const wrapper = mount(<PlaceCardList offers={offers} />);

    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseEnter`);
    expect(wrapper.state().activeCard).toEqual(offers[2]);
    wrapper
      .find(`.place-card`)
      .at(2)
      .simulate(`mouseLeave`);
    expect(wrapper.state().activeCard).toBe(null);
  });
});
