import styled from "styled-components/macro";
import { primaryColour, backgroundColour } from "../../../constants/styles";

export const Container = styled.div`
  @media screen and (min-width: 300px) {
    font-size: calc(12px + 6 * ((100vw - 300px) / 700));
  }
`;

export const Background = styled.div`
  position: relative;
  background: url(${({ src }) =>
      src ? `../images/${src}.webp` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
  height: 100%;
  @media (max-width: 600px) {
    background: url(${({ src }) =>
        src ? `../images/${src}-sm.webp` : "../images/misc/home-bg.jpg"})
      top left / cover no-repeat;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${backgroundColour} 40%,
    transparent 70%
  );
`;

export const Group = styled.div`
  position: relative;
  width: 38%;
  padding: 1em 1em 3em;
  margin-left: 2em;
  @media (max-width: 900px) {
    width: 55%;
  }
  @media (max-width: 600px) {
    width: 75%;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  padding: 0.5em 0;
  color: white;
  font-size: 1em;
  margin: 0.5em 0 2em;
`;

export const CallToAction = styled.button`
  background: ${primaryColour};
  color: white;
  font-size: 1.5em;
  border-radius: 0.25em;
  border: none;
  padding: 0.5em 2em;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 10px;
  background: white;
`;
