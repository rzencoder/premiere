import styled from "styled-components/macro";
import {
  primaryColour,
  backgroundColour,
  primaryColourLight,
  fontWhite,
} from "../../../constants/styles";

export const Container = styled.header`
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  @media screen and (min-width: 300px) {
    font-size: calc(12px + 6 * ((100vw - 300px) / 700));
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
  @media screen and (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const Background = styled.div`
  position: absolute;
  right: 0;
  background: url(${({ src }) =>
      src ? `../images/content/${src}.jpg` : "../images/content/blade.jpg"})
    top right / cover no-repeat;
  height: 100%;
  width: 70%;
  @media (max-width: 700px) {
    background: url(${({ src }) =>
        src
          ? `../images/content/${src}-sm.jpg`
          : "../images/content/blade.jpg"})
      center / cover no-repeat;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, ${backgroundColour} 40%, transparent 70%);
  @media screen and (max-width: 950px) {
    background: linear-gradient(
      110deg,
      ${backgroundColour} 45%,
      transparent 70%
    );
    @media screen and (max-width: 700px) {
      background: linear-gradient(
        0deg,
        rgb(34, 34, 34),
        rgba(34, 34, 34, 0.3),
        rgba(34, 34, 34, 0.85)
      );
    }
  }
`;

export const TextContainer = styled.div`
  position: relative;
  color: ${fontWhite};
  width: 45%;
  margin: 30px 0 0 50px;
  @media screen and (max-width: 1100px) {
    width: 50%;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
    margin: 0 0 0 30px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  margin: 0.5em 0;
`;

export const Text = styled.p`
  font-size: 1em;
  line-height: 1.3em;
`;

export const Button = styled.button`
  background: ${primaryColour};
  font-size: 1em;
  padding: 10px 20px;
  border-radius: 4px;
  color: ${fontWhite};
  border: none;
  font-weight: 700;
  transition: background 0.3s;
  margin: 15px 0;
  &:hover {
    cursor: pointer;
    background: ${primaryColourLight};
  }
`;

export const Details = styled.div`
  display: flex;
  > div {
    margin-right: 10px;
  }
`;

export const SubText = styled.div`
  font-style: italic;
  font-size: 0.8em;
`;

export const Divider = styled.div`
  width: 100%;
  height: 15px;
  background: linear-gradient(0deg, #222, #181818);
`;

export const AgeRating = styled.img`
  width: 2em;
`;

export const Rating = styled.div`
  ${({ color }) => color && `color:${color};`}
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-left: 10px;
`;

export const Year = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
