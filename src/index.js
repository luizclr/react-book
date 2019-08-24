import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';

import './index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="React book" />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
