import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export function RouteValidator({ user, protectedPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return (
            <Redirect
              to={{
                pathname: protectedPath,
              }}
            />
          );
        } else {
          return children;
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: ROUTES.HOME,
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
}
