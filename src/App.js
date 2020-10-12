import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import * as ROUTES from "./constants/routes";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Browse from "./pages/browse";
import { RouteValidator, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/use-auth-listener";

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <RouteValidator
          user={user}
          protectedPath={ROUTES.BROWSE}
          path={ROUTES.SIGNUP}
        >
          <SignUp />
        </RouteValidator>
        <RouteValidator
          user={user}
          protectedPath={ROUTES.BROWSE}
          path={ROUTES.SIGNIN}
        >
          <SignIn />
        </RouteValidator>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <RouteValidator
          user={user}
          protectedPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </RouteValidator>
      </Switch>
    </Router>
  );
}

export default App;
