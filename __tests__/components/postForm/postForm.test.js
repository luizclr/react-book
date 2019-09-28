import React from 'react';
import { mount } from 'enzyme';

import PostForm from '../../../src/components/postForm/postForm';

describe('<PostForm />', () => {
  let addPost;

  beforeEach(() => {
    addPost = jest.fn();
  });

  it('should render <PostForm />', () => {
    mount(<PostForm addPost={addPost} />);
  });

  it('should render <PostForm /> with inputs', () => {
    const wrapper = mount(<PostForm addPost={addPost} />);

    expect(wrapper.find('form input[name="name"]')).toHaveLength(1);
    expect(wrapper.find('form input[type="submit"]')).toHaveLength(1);
    expect(wrapper.find('form textarea')).toHaveLength(1);
  });

  it('should call handleSubmit() when submitted', () => {
    const wrapper = mount(<PostForm addPost={addPost} />);
    const instance = wrapper.instance();

    instance.handleSubmit = jest.fn();
    wrapper.find('form').simulate('submit');

    expect(instance.handleSubmit).toHaveBeenCalled();
  });
});
