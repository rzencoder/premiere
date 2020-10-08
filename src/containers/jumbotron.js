import React from "react";
import { Jumbotron } from "../components";
import * as ROUTES from "../constants/routes";
import NavigationContainer from "./navigation";

export default function JumbotronContainer() {
  return (
    <Jumbotron>
      <Jumbotron.Background src="blade">
        <Jumbotron.Overlay />
        <NavigationContainer />
        <Jumbotron.Group>
          <Jumbotron.Title>
            Watch the latest films and series anywhere
          </Jumbotron.Title>
          <Jumbotron.Text>
            Subscribe free for 30 days. Cancel anytime
          </Jumbotron.Text>
          <Jumbotron.CallToAction to={ROUTES.SIGNUP}>
            Try for free
          </Jumbotron.CallToAction>
        </Jumbotron.Group>
      </Jumbotron.Background>
    </Jumbotron>
  );
}
