import React from "react";
import {
  Background,
  Container,
  Overlay,
  Group,
  Title,
  Text,
  CallToAction,
} from "./styles/jumbotron";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Jumbotron({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Overlay = function JumbotronOverlay({ ...restProps }) {
  return <Overlay {...restProps} />;
};

Jumbotron.Group = function JumbotronGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Text = function JumbotronText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Jumbotron.CallToAction = function JumbotronCallToAction({
  to,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink to={to}>
      <CallToAction {...restProps}>{children}</CallToAction>
    </ReactRouterLink>
  );
};

Jumbotron.Background = function JumbotronBackground({ ...restProps }) {
  return <Background {...restProps} />;
};
