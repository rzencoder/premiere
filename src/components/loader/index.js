import React from "react";
import { Container, Spinner } from "./styles/loader";

export default function Loader({ children, loading, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Loader.Spinner = function LoaderSpinner({ ...restProps }) {
  return <Spinner {...restProps} />;
};
