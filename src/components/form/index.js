import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Title,
  Content,
  Label,
  Input,
  Submit,
  Frame,
  Text,
  Link,
  Error,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Frame = function FormFrame({ children, ...restProps }) {
  return (
    <Frame {...restProps}>
      <div>{children}</div>
    </Frame>
  );
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Content = function FormContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Link = function FormLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Link {...restProps}>{children}</Link>
    </ReactRouterLink>
  );
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};
