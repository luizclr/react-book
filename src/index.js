import React, { Component } from 'react';
import { render } from 'react-dom';

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
          <Post />
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
