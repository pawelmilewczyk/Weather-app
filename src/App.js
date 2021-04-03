import React from "react";
import "./App.scss";
import Local from "./containers/Local/Local";
import Search from "./containers/Search/Search";
import Nav from "./components/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
// import Aux from './hoc/Aux/Aux'

function App() {
  return (
    <div className="grid">
      <Nav />
      <Switch>
        <Route exact path="/" component={Local}></Route>
        <Route path="/search" component={Search}></Route>
      </Switch>
    </div>
  );
}

export default App;
