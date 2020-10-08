import React from "react";
import {
  Background,
  Container,
  Overlay,
  Group,
  Title,
  Divider,
  Text,
  CallToAction,
} from "./styles/jumbotron";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Jumbotron({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Background = function JumbotronBackground({
  children,
  ...restProps
}) {
  return <Background {...restProps}>{children}</Background>;
};

Jumbotron.Overlay = function JumbotronOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Jumbotron.Group = function JumbotronGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Divider = function JumbotronDivider({ children, ...restProps }) {
  return <Divider {...restProps}>{children}</Divider>;
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
