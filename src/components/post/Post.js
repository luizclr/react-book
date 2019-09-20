import React from 'react';

import PropTypes from 'prop-types';

import Card from '../base/Card';
import PostHeader from './PostHeader';

import '../../style/components/Post.scss';

const Post = ({ post: { name, about, picture } }) => (
  <Card className="post">
    <PostHeader picture={picture} name={name} />
    <p>{about}</p>
  </Card>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
