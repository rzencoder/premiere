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
  Rating,
  AgeRating,
  Year,
} from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Background = function FeatureBackground({ ...restProps }) {
  return <Background {...restProps} />;
};

Feature.Overlay = function FeatureOverlay({ ...restProps }) {
  return <Overlay {...restProps} />;
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

Feature.AgeRating = function FeatureAgeRating({ ...restProps }) {
  return <AgeRating {...restProps} />;
};

Feature.Year = function FeatureYear({ children, ...restProps }) {
  return (
    <Year {...restProps}>
      <div>{children}</div>
    </Year>
  );
};

Feature.Rating = function FeatureRating({ children, ...restProps }) {
  return (
    <Rating {...restProps}>
      <div>{children}</div>
    </Rating>
  );
};
