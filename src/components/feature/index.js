import React from "react";
import {
  Background,
  Container,
  Overlay,
  TextContainer,
  Title,
  Text,
  Button,
  Details,
  SubText,
} from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Background = function FeatureBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

Feature.Overlay = function FeatureOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Feature.TextContainer = function FeatureTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Text = function FeatureText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Feature.Button = function FeatureButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Feature.Details = function FeatureDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};

Feature.SubText = function FeatureSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};
