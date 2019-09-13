import React from 'react';

import '../../style/components/PostHeader.scss';

const PostHeader = () => (
  <div className="post-header">
    <div className="img-box">
      <img src="https://picsum.photos/id/72/70/70" alt="https://picsum.photos/id/72/70/70" />
    </div>
    <div className="info-box">
      <p>User name</p>
      <span>date</span>
    </div>
  </div>
);

export default PostHeader;
