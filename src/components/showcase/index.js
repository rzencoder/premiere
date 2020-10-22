import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Button,
  Section,
  ImageContainer,
  ImageColumn,
  ImageRow,
  Image,
  ImageOverlay,
  TextContainer,
  ItemName,
  ItemTitle,
} from "./styles/showcase";

export default function Showcase({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Showcase.Button = function ShowcaseButton({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Button {...restProps}>{children}</Button>
    </ReactRouterLink>
  );
};

Showcase.Section = function ShowcaseSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Showcase.ImageContainer = function ShowcaseImageContainer({
  children,
  ...restProps
}) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Showcase.ImageColumn = function ShowcaseImageColumn({
  children,
  ...restProps
}) {
  return <ImageColumn {...restProps}>{children}</ImageColumn>;
};

Showcase.ImageRow = function ShowcaseImageRow({ children, ...restProps }) {
  return <ImageRow {...restProps}>{children}</ImageRow>;
};

Showcase.Image = function ShowcaseImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Showcase.ImageOverlay = function ShowcaseImageOverlay({
  children,
  ...restProps
}) {
  return <ImageOverlay {...restProps}>{children}</ImageOverlay>;
};

Showcase.TextContainer = function ShowcaseTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Showcase.ItemTitle = function ShowcaseItemTitle({ children, ...restProps }) {
  return <ItemTitle {...restProps}>{children}</ItemTitle>;
};

Showcase.ItemName = function ShowcaseItemName({ children, ...restProps }) {
  return <ItemName {...restProps}>{children}</ItemName>;
};
