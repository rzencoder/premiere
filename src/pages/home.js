import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import AboutContainer from "../containers/about";
import { FooterContainer } from "../containers/footer";
import ShowcaseContainer from "../containers/showcase";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <AboutContainer />
      <ShowcaseContainer />
      <FooterContainer />
    </>
  );
}
