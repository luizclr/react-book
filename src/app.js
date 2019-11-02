import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header/Header';
import PostList from './components/postList/PostList';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import './style/index.scss';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header title="Reactbook" />
        <div className="page-wrapper">
          <Sidebar>
            <Profile />
          </Sidebar>
          <div className="container">
            <PostList />
          </div>
        </div>
      </Provider>
    );
  }
}
