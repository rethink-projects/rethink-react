
import React from 'react';
import { shallow } from 'enzyme';
import CardUser from './CardUser';

describe('<CardUser />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<CardUser {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
