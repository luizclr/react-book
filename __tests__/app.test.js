import React from 'react';
import { mount } from 'enzyme';

import App from '../src/app';

describe('<App />', () => {
  it('should fully render the component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.contains(<h1>Reactbook</h1>)).toBe(true);
  });
});
