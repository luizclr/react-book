import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Card from '../base/Card';

import '../../style/components/postForm.scss';

class PostForm extends Component {
  state = {
    name: '',
    about: '',
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e, addPost) {
    e.preventDefault();

    addPost({
      id: `id${Math.random()}`,
      picture: 'https://picsum.photos/60/60',
      ...this.state,
    });

    this.setState({
      name: '',
      about: '',
    });
  }

  render() {
    const { addPost } = this.props;
    const { name, about } = this.state;
    return (
      <Card className="post-form">
        <form onSubmit={e => this.handleSubmit(e, addPost)}>
          <p>Add a new post</p>
          <input
            type="text"
            placeholder="name"
            name="name"
            required
            value={name}
            onChange={e => this.handleChange(e)}
          />
          <textarea
            rows="3"
            name="about"
            placeholder="about"
            required
            value={about}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" text="enviar" />
        </form>
      </Card>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default PostForm;
