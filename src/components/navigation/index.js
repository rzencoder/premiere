import React from "react";
import { Container, Logo, Button } from "./styles/navigation";
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
