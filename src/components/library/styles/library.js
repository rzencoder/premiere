import styled from "styled-components/macro";
import {
  primaryColour,
  backgroundColour,
  primaryColourLight,
} from "../../../constants/styles";

export const Container = styled.div`
  @media screen and (min-width: 300px) {
    font-size: calc(12px + 6 * ((100vw - 300px) / 700));
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
  height: 500px;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  right: 0;
  background: url(${({ src }) =>
      src ? `../images/content/${src}.png` : "../images/content/blade.png"})
    top right / cover no-repeat;
  height: 100%;
  width: 70%;
  @media (max-width: 600px) {
    background: url(${({ src }) =>
        src
          ? `../images/content/${src}-sm.png`
          : "../images/content/blade-sm.png"})
      top left / cover no-repeat;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 222px;
  transform: skewX(-5deg);
  padding: 0 10px;
  border-radius: 10px;
`;

export const Button = styled.button``;

export const Divider = styled.div`
  width: 100%;
  height: 15px;
  background: linear-gradient(0deg, #222, #181818);
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const CarouselGroup = styled.div`
  width: 60%;
`;

export const CarouselButton = styled.button``;
