
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<Card {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
