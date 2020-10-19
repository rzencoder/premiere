import React from "react";
import {
  Container,
  Title,
  Link,
  Image,
  Menu,
  ImageText,
} from "./styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.Link = function ProfileLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Profile.ImageText = function ProfileImageText({ children, ...restProps }) {
  return <ImageText {...restProps}>{children}</ImageText>;
};

Profile.Menu = function ProfileMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Profile.Image = function ProfileImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
