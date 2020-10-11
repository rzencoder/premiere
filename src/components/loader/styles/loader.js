import styled, { keyframes } from "styled-components/macro";
import { primaryColour, backgroundColour } from "../../../constants/styles";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Spinner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  position: relative;
  animation: ${spin} 1.4s infinite linear;
  transform: translateZ(0);
  @media screen and (min-width: 300px) {
    font-size: calc(10px + 6 * ((100vw - 300px) / 1000));
  }

  &:before {
    width: 50%;
    height: 50%;
    background: ${primaryColour};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &:after {
    width: 75%;
    height: 75%;
    border-radius: 50%;
    background: ${backgroundColour};
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
