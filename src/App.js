import "./App.css";
import { getAllStarships } from "./services/sw-api";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ShipPage from "./pages/ShipPage/ShipPage";
import MainPage from "./pages/MainPage/MainPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

class App extends React.Component {
  state = {
    allStarships: null,
    loaded: false,
  };

  async componentDidMount() {
    let allStarships = await getAllStarships();
    this.setState({ allStarships, loaded: true });
  }

  render() {
    if (!this.state.loaded) {
      return <LoadingPage />;
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/starship" render={(props) => <ShipPage {...props} />} />
          <Route
            path="/"
            render={(props) => (
              <MainPage {...props} allStarships={this.state.allStarships} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
