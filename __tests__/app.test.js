import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import App from '../src/app';

const mockStore = createStore();
const store = mockStore({ posts: {} });

describe('<App />', () => {
  it('should fully render the component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(wrapper.contains(<h1>Reactbook</h1>)).toBe(true);
  });
});
