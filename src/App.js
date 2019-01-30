import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import { Route, Redirect, Link, Switch } from "react-router-dom";
import Index from './pages/Index';
import NotFound from './pages/NotFound';


class App extends Component {

  render() {
    return (
      <div>
        <Topbar/>
        <Switch>

        <Route exact path="/" exact component={Index} />
        <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;