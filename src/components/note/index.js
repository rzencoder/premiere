import React from "react";
import { Container, Text, Button } from "./styles/note";

export default function Note({ setOpenNote, children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Button
        data-testid="note-button"
        id="note-close"
        onClick={() => setOpenNote(false)}
      >
        ✖
      </Button>
      {children}
    </Container>
  );
}

Note.Text = function NoteText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};
