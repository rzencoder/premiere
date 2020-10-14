import React from "react";
import {
  Container,
  Logo,
  Button,
  Profile,
  Section,
  Search,
  Item,
  ProfileImage,
  ProfileImageText,
  ProfileMenu,
  BrowseLogo,
  SearchBox,
  SearchIcon,
  Group,
} from "./styles/navigation";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navigation.Link = function NavigationLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to} {...restProps}>
      {children}
    </ReactRouterLink>
  );
};

Navigation.Button = function NavigationButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Navigation.Logo = function NavigationLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Navigation.Section = function NavigationSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Navigation.Profile = function NavigationProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Navigation.Item = function NavigationItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Navigation.ProfileImage = function NavigationProfileImage({
  children,
  ...restProps
}) {
  return <ProfileImage {...restProps}>{children}</ProfileImage>;
};

Navigation.Search = function NavigationSearch({ children, ...restProps }) {
  return <Search {...restProps}>{children}</Search>;
};

Navigation.ProfileImageText = function NavigationProfileImageText({
  children,
  ...restProps
}) {
  return <ProfileImageText {...restProps}>{children}</ProfileImageText>;
};

Navigation.ProfileMenu = function NavigationProfileMenu({
  children,
  ...restProps
}) {
  return <ProfileMenu {...restProps}>{children}</ProfileMenu>;
};

Navigation.BrowseLogo = function NavigationBrowseLogo({ ...restProps }) {
  return (
    <div>
      <BrowseLogo {...restProps} />
    </div>
  );
};

Navigation.SearchIcon = function NavigationSearchIcon({ ...restProps }) {
  return <SearchIcon {...restProps} />;
};

Navigation.SearchBox = function NavigationSearchBox({
  children,
  ...restProps
}) {
  return <SearchBox {...restProps}>{children}</SearchBox>;
};

Navigation.Group = function NavigationGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
