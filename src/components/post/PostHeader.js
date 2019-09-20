import React from 'react';

import PropTypes from 'prop-types';

import '../../style/components/PostHeader.scss';

const PostHeader = ({ picture, name }) => (
  <div className="post-header">
    <div className="img-box">
      <img src={picture} alt={name} />
    </div>
    <div className="info-box">
      <p>{name}</p>
      <span>12/09/2019</span>
    </div>
  </div>
);

PostHeader.defaultProps = {
  name: '',
  picture: '',
};

PostHeader.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
};

export default PostHeader;
