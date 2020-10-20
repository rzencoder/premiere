import styled from "styled-components/macro";
import {
  primaryColour,
  backgroundColour,
  fontWhite,
} from "../../../constants/styles";

export const Container = styled.div`
  position: relative;
  height: 100%;
  @media screen and (min-width: 300px) {
    font-size: calc(12px + 6 * ((100vw - 300px) / 700));
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, ${backgroundColour} 40%, transparent 70%);
`;

export const Group = styled.div`
  position: relative;
  width: 45%;
  padding: 1em 1em 3em;
  margin-left: 2em;
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 75%;
  }
`;

export const Title = styled.h2`
  color: ${fontWhite};
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  padding: 0.5em 0;
  color: ${fontWhite};
  font-size: 1em;
  margin: 0.5em 0 2em;
`;

export const CallToAction = styled.button`
  background: ${primaryColour};
  color: ${fontWhite};
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
  background: ${fontWhite};
`;

export const Background = styled.div`
  width: 70%;
  position: absolute;
  top: 0;
  right: 0;
  background: url(${({ src }) =>
      src
        ? `../images/backgrounds/${src}.jpg`
        : "../images/backgrounds/background.jpg"})
    top right / cover no-repeat;
  height: 100%;
  @media (max-width: 600px) {
    background: url(${({ src }) =>
        src
          ? `../images/backgrounds/${src}-sm.jpg`
          : "../images/backgrounds/background-sm.jpg"})
      top right / cover no-repeat;
  }
`;
