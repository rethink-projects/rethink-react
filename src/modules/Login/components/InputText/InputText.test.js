
import React from 'react';
import { shallow } from 'enzyme';
import InputText from './InputText';

describe('<InputText />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<InputText {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
