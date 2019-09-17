import React from 'react';
import { mount } from 'enzyme';

import Header from '../../../src/components/header/Header';

describe('<Header />', () => {
  const title = 'Reactbook';

  it('should render <Header /> with title', () => {
    const wrapper = mount(<Header title={title} />);

    expect(wrapper.find('h1').text()).toBe(title);
    expect(wrapper.contains(<h1>Reactbook</h1>)).toBe(true);
  });
});
