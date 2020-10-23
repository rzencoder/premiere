import React from "react";
import { Navigation } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";

export default function NavigationContainer() {
  return (
    <Navigation>
      <Navigation.Logo
        id="home-logo"
        src={logo}
        alt="premiere"
        to={ROUTES.HOME}
      />
      <Navigation.Link to={ROUTES.SIGNIN}>
        <Navigation.Button id="nav-signin">Sign In</Navigation.Button>
      </Navigation.Link>
    </Navigation>
  );
}
