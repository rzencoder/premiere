import React from "react";
import { Jumbotron } from "../components";
import { Navigation } from "../components";
import logo from "../logo.png";

export default function JumbotronContainer() {
  return (
    <Jumbotron>
      <Jumbotron.Background src="blade">
        <Jumbotron.Overlay />
        <Navigation>
          <Navigation.Logo src={logo} alt="premiere" to="/" />
          <Navigation.Link to="sign-in">
            <Navigation.Button>Sign In</Navigation.Button>
          </Navigation.Link>
        </Navigation>
        <Jumbotron.Group>
          <Jumbotron.Title>
            Watch the latest films and series anywhere
          </Jumbotron.Title>
          <Jumbotron.Text>
            Subscribe free for 30 days. Cancel anytime
          </Jumbotron.Text>
          <Jumbotron.CallToAction onClick={() => console.log("hello")}>
            Try for free
          </Jumbotron.CallToAction>
        </Jumbotron.Group>
      </Jumbotron.Background>
    </Jumbotron>
  );
}
