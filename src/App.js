import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import { Route, Switch } from "react-router-dom";
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import MagiaInfo from './pages/MagiaInfo';
import magias from "./data/magias.json";


class App extends Component {

  state = {
    magias: [],
    favorites: []
  }
  componentWillMount() {
    this.setState({magias});
  }
  componentWillUpdate() {
    console.log('teste');
  }

  render() {
    return (
      <div>
        <Topbar/>
        <main role="main">
          <Switch>
            <Route exact path="/" render={(props) => <Index {...props} listaMagia={this.state.magias}/>} />
            <Route exact path="/:magicId(\d+)/*" render={(props) => <MagiaInfo {...props} listaMagia={this.state.magias}/>} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
