import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.scss';

class App extends Component {
  render() {
    return <h1>React book</h1>;
  }
}

render(<App />, document.getElementById('app'));
