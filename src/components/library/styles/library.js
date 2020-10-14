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
  height: 400px;
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
  transform: skewX(-3deg);
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
  width: 75%;
  position: relative;
`;

export const CarouselButton = styled.button`
  background: rgba(12, 12, 12, 0.3);
  color: white;
  border: none;
  font-weight: 700;
  padding: 5px 10px;
  margin: 10px;
  font-size: 30px;
`;

export const Selector = styled.div`
  display: flex;
  margin: 20px 20px 20px 300px;
`;

export const SelectorItem = styled.div`
  ${({ active }) =>
    active
      ? `color: white; border-bottom: 3px solid ${primaryColour};`
      : `color: #bbb; border-bottom: 3px solid #111;`}
  font-weight: 600;
  font-size: 20px;
  padding: 10px 20px;
`;

export const CarouselOverlay = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 20%;
  background: linear-gradient(270deg, #222, 75%, transparent);
`;

export const Panel = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background: rgba(26, 26, 26, 0.4);
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  transform: skewX(-3deg);
  > div {
    color: white;
    font-size: 30px;
    font-weight: 600;
    padding: 20px;
    margin-bottom: 20px;
    font-style: italic;
    text-align: center;
  }
`;
