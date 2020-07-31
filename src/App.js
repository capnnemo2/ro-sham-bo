import React from "react";
import { Route, Switch } from "react-router-dom";
import Rules from "./Rules";
import Choices from "./Choices";
import Battlefield from "./Battlefield";
import Context from "./Context";

export default class App extends React.Component {
  static contextType = Context;

  state = {
    userChoice: "",
    score: 0,
  };

  makeChoice = (choice) => {
    this.setState({
      userChoice: choice,
    });
  };

  updateScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  render() {
    const value = {
      makeChoice: this.makeChoice,
      userChoice: this.state.userChoice,
      updateScore: this.updateScore,
      score: this.state.score,
    };

    return (
      <Context.Provider value={value}>
        <div className="App">
          <main>
            <header>
              <h1>Rock Paper Scissors</h1>
            </header>
            <Switch>
              <Route exact path="/" component={Rules} />
              <Route path="/choices" component={Choices} />
              <Route path="/battlefield" component={Battlefield} />
            </Switch>
          </main>
        </div>
      </Context.Provider>
    );
  }
}
