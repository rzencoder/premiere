import React from "react";
import { Jumbotron } from "../components";
import JumbotronContainer from "../containers/jumbotron";
import logo from "../logo.png";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <Jumbotron.Divider />
      <div style={{ height: "400px", background: "#ee5104" }}></div>
    </>
  );
}
