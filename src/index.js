import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Container from './components/Conteiner';

import './style/index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="React book" />
        <Container>
          <p>hello</p>
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
