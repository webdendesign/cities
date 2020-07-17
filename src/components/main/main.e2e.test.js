import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import offers from '../../mocks/test-offers.js';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Main`, () => {
  it(`should call onClickTitle when the title is clicked`, () => {
    const onTitleClickFn = jest.fn();
    const component = shallow(<Main offers={offers} placeAmount={34} onTitleClick={onTitleClickFn} />
    );
    component
      .find(`h1`)
      .simulate(`click`);
    expect(onTitleClickFn).toHaveBeenCalled();
  });
});
