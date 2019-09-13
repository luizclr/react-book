import React from 'react';

import PropTypes from 'prop-types';

import Card from '../base/Card';
import PostHeader from './Post-header';

import '../../style/components/Post.scss';

const Post = ({ post: { picture, name, about } }) => (
  <Card className="post">
    <PostHeader picture={picture} name={name} />
    <p>{about}</p>
  </Card>
);

Post.defaultProps = {
  post: {
    id: '',
    about: '',
    name: '',
    picture: '',
  },
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    about: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
  }),
};

export default Post;
