import React, { Component } from 'react';
import Menu from './components/Menu';
import { Route, BrowserRouter } from "react-router-dom";
import { About } from './components/about';
import { Home } from './components/home';

import "./styles/App.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Menu />
          <Route path="/react" component={Home} />
          <Route path="/about" component={About} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
