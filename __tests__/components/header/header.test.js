import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import Header from '../../../src/components/header/Header';

const mockStore = createStore();
const store = mockStore({ navigation: { isOn: false } });

describe('<Header />', () => {
  const title = 'Reactbook';

  it('should render <Header /> with title', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Header title={title} />
      </Provider>,
    );

    expect(wrapper.find('h1').text()).toBe(title);
  });
});
