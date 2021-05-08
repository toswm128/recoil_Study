import React from "react";
import { RecoilRoot } from "recoil";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import TodoShowingPage from "./Pages/TodoShowingPage";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/Show" component={TodoShowingPage} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
