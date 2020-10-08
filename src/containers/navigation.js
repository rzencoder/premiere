import React from "react";
import { Navigation } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";

export default function NavigationContainer() {
  return (
    <Navigation>
      <Navigation.Logo src={logo} alt="premiere" to={ROUTES.HOME} />
      <Navigation.Link to={ROUTES.SIGNIN}>
        <Navigation.Button>Sign In</Navigation.Button>
      </Navigation.Link>
    </Navigation>
  );
}
