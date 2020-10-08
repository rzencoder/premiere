import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import AboutContainer from "../containers/about";
import FooterContainer from "../containers/footer";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <AboutContainer />
      <FooterContainer />
    </>
  );
}
