import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import * as ROUTES from "./constants/routes";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  return (
    <>
      <Switch>
        <Route path={ROUTES.SIGNUP}>
          <SignUp />
        </Route>
        <Route path={ROUTES.SIGNIN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
