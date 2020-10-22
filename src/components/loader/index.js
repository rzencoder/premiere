import React from "react";
import { Container, Spinner } from "./styles/loader";

export default function Loader({ ...restProps }) {
  return (
    <Container data-testid="loader">
      <Spinner {...restProps} />;
    </Container>
  );
}
