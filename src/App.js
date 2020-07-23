import React from "react";
import { Route, Switch } from "react-router-dom";
import Rules from "./Rules";
import Choices from "./Choices";
import Battlefield from "./Battlefield";

function App() {
  return (
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
  );
}

export default App;
