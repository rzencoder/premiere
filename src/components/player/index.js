import React from "react";
import { createPortal } from "react-dom";
import { Container, Group, Button } from "./styles/player";

export default function Player({ setOpenPlayer, src }) {
  return createPortal(
    <Container>
      <Group>
        <video autoPlay controls>
          <source src={src} type="video/mp4" />
        </video>
        <Button onClick={() => setOpenPlayer(false)}>✖</Button>
      </Group>
    </Container>,
    document.body
  );
}
