import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import DataTemplate from '../templates/data';

import Header from './components/header/Header';
import Post from './components/post/Post';
import Container from './components/base/Conteiner';

import './style/index.scss';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header title="Reactbook" />
        <Container>
          <ul>
            {DataTemplate.map(post => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        </Container>
      </Provider>
    );
  }
}
