import React, { Component } from 'react';
import { render } from 'react-dom';

import DataTemplate from '../templates/data';

import Header from './components/header/Header';
import Post from './components/post/Post';
import Container from './components/base/Conteiner';

import './style/index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="React book" />
        <Container>
          <ul>
            {DataTemplate.map((post) => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
