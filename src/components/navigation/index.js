import React from "react";
import {
  Container,
  Logo,
  Button,
  Section,
  Search,
  Item,
  BrowseLogo,
  SearchBox,
  SearchIcon,
  Group,
} from "./styles/navigation";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navigation.Group = function NavigationGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

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

Navigation.BrowseLogo = function NavigationBrowseLogo({ ...restProps }) {
  return (
    <BrowseLogo>
      <img {...restProps} />
    </BrowseLogo>
  );
};

Navigation.Section = function NavigationSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Navigation.Item = function NavigationItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Navigation.Search = function NavigationSearch({ children, ...restProps }) {
  return <Search {...restProps}>{children}</Search>;
};

Navigation.SearchIcon = function NavigationSearchIcon({ ...restProps }) {
  return <SearchIcon {...restProps} />;
};

Navigation.SearchBox = function NavigationSearchBox({ ...restProps }) {
  return <SearchBox {...restProps} />;
};
