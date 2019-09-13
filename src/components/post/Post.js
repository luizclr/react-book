import React from 'react';

import Card from '../base/Card';
import PostHeader from './Post-header';

import '../../style/components/Post.scss';

const Post = () => (
  <Card className="post">
    <PostHeader />
    <p>
      Nostrud irure in ipsum labore irure elit enim sint. Qui magna anim duis tempor quis. Veniam
      enim Lorem quis mollit pariatur anim duis id duis exercitation adipisicing. Tempor proident
      commodo et cupidatat veniam amet aliqua cupidatat occaecat et laboris excepteur fugiat mollit.
      Ipsum quis enim anim aute anim et ex. Excepteur Lorem enim ipsum et cupidatat ea aliquip
      mollit minim.
    </p>
  </Card>
);

export default Post;
