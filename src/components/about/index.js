import React from "react";
import { Container, Item, Divider, Text, Title, Icon } from "./styles/about";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Item = function AboutItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

About.Divider = function AboutDivider({ children, ...restProps }) {
  return <Divider {...restProps} />;
};

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

About.Text = function AboutText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

About.Icon = function AboutIcon({ src, ...restProps }) {
  return <Icon {...restProps} src={src} />;
};
