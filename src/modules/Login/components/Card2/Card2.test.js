
import React from 'react';
import { shallow } from 'enzyme';
import Card2 from './Card2';

describe('<Card2 />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<Card2 {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
