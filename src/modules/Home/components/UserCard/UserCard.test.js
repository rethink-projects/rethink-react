
import React from 'react';
import { shallow } from 'enzyme';
import UserCard from './UserCard';

describe('<UserCard />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<UserCard {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
