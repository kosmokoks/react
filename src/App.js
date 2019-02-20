import React, { Component } from 'react';
import Menu from './components/Menu';
import { Route, HashRouter } from "react-router-dom";
import { About } from './components/about';
import { Home } from './components/home';

import "./styles/App.css"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Menu />
          <Route path="/react" component={Home} />
          <Route path="/about" component={About} />
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
