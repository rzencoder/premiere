import React from "react";
import {
  Container,
  Text,
  Subtitle,
  Section,
  Link,
  Divider,
  Column,
  Break,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Subtitle = function FooterSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Divider = function FooterDivider({ ...restProps }) {
  return <Divider {...restProps} />;
};

Footer.Section = function FooterSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
