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

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, ${backgroundColour} 40%, transparent 70%);
`;

export const TextContainer = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  width: 40%;
  margin: 30px 0 0 50px;
`;

export const Title = styled.h2`
  font-size: 2.5em;
  margin: 0.5em 0;
`;

export const Text = styled.p`
  font-size: 1em;
`;

export const Button = styled.button`
  background: ${primaryColour};
  font-size: 1em;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
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
  width: 35px;
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
