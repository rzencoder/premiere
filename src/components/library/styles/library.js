import styled from "styled-components/macro";
import { primaryColour, fontWhite } from "../../../constants/styles";

export const Container = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 300px) {
    font-size: calc(12px + 6 * ((100vw - 300px) / 700));
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }

  @media screen and (max-width: 750px) {
    margin: 20px 20px 50px;
  }
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
  transform: skewX(-3deg);
  padding: 0 10px;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    transform: none;
  }
`;

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
  max-width: 1000px;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
  @media screen and (max-width: 350px) {
    padding: 20px;
  }
`;

export const CarouselButton = styled.button`
  background: rgba(12, 12, 12, 0.3);
  color: ${fontWhite};
  border: none;
  font-weight: 700;
  padding: 5px 10px;
  margin: 10px;
  font-size: 30px;
  cursor: pointer;
`;

export const Selector = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  > div {
    display: flex;
    flex-wrap: wrap;
    width: 74%;
    @media screen and (max-width: 700px) {
      width: 95%;
      justify-content: center;
    }
  }
`;

export const SelectorItem = styled.button`
  border: none;
  ${({ active }) =>
    active
      ? `color: white; border-bottom: 3px solid ${primaryColour};`
      : `color: #bbb; border-bottom: 3px solid #111;`}
  font-weight: 600;
  font-size: 1.2em;
  padding: 10px 20px;
  cursor: pointer;
  background: none;
  &:hover {
    color: ${({ active }) => (active ? `#fff;` : `#ddd;`)};
  }
  @media screen and (max-width: 700px) {
    border: none;
    padding: 5px 10px;
    font-size: 1.5em;
  }
`;

export const CarouselOverlay = styled.div`
  display: ${({ show }) => (show ? `block;` : `none;`)}
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 20%;
  background: linear-gradient(270deg, #222, 75%, transparent);
  @media screen and (max-width:350px) {
    display: none;
  }
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
    color: ${fontWhite};
    font-size: 1.5em;
    font-weight: 600;
    padding: 20px;
    margin-bottom: 20px;
    font-style: italic;
    text-align: center;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
