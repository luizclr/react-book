import React from 'react';
import { mount } from 'enzyme';

import Header from '../../src/components/header/Header';

it('should render <Header /> with title', () => {
  const wrapper = mount(<Header title="React book" />);

  expect(wrapper.contains(<h1>React book</h1>)).toBe(true);
});
