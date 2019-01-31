import React, { Component } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import { Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MagiaInfo from "./pages/MagiaInfo";
import magias from "./data/magias.json";

class App extends Component {
  state = {
    magias: [],
    favorites: []
  };

  componentWillMount() {
    if (localStorage.favorites) {
      this.setState({
        magias: magias,
        favorites: JSON.parse(localStorage.favorites)
      });
    } else {
      this.setState({ magias });
    }
  }
  addToFav(id) {
    console.log("add id");
    if (!this.state.favorites.includes(id)) {
      this.setState({ favorites: [...this.state.favorites, id] }, () =>
        this.saveFav()
      );
    }
  }
  removeFav(id) {
    console.log("removing id");
    if (this.state.favorites.includes(id)) {
      this.setState(
        { favorites: this.state.favorites.filter(fav => fav !== id) },
        () => this.saveFav()
      );
    }
  }

  saveFav() {
    if (this.state.favorites) {
      localStorage.favorites = JSON.stringify(this.state.favorites);
    }
  }

  render() {
    const { magias, favorites } = this.state;
    return (
      <div>
        <Topbar />
        <main role="main">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Index
                  {...props}
                  listaMagia={magias}
                  favorites={favorites}
                  addToFav={id => this.addToFav(id)}
                  removeFav={id => this.removeFav(id)}
                />
              )}
            />
            <Route
              exact
              path="/:magicId(\d+)/*"
              render={props => <MagiaInfo {...props} listaMagia={magias} />}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
