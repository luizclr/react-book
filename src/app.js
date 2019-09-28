import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header/Header';
import PostList from './components/postList/PostList';
import Container from './components/base/Conteiner';

import './style/index.scss';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header title="Reactbook" />
        <Container>
          <PostList />
        </Container>
      </Provider>
    );
  }
}
