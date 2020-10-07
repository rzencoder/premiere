import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/sign-in">Sign In</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
