import styled from "styled-components/macro";
import {
  primaryColour,
  backgroundColour,
  primaryColourLight,
  fontWhite,
} from "../../../constants/styles";

const majorBreakPoint = "600px";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  @media screen and (min-width: 300px) {
    font-size: calc(16px + 6 * ((100vw - 300px) / 1000));
  }
  @media screen and (min-width: ${majorBreakPoint}) {
    font-size: calc(12px + 6 * ((100vw - 300px) / 700));
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background: ${primaryColour};
  font-size: 1.5em;
  padding: 0.45em 1.4em;
  border-radius: 4px;
  color: ${fontWhite};
  border: none;
  font-weight: 700;
  transition: background 0.3s;
  &:hover {
    cursor: pointer;
    background: ${primaryColourLight};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ImageColumn = styled.div`
  width: 32.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: ${majorBreakPoint}) {
    width: 49.5%;
    ${({ largerScreensOnly }) => largerScreensOnly && `display: none;`}
  }
`;

export const ImageRow = styled.div`
  width: 100%;
  margin-bottom: 0px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.4);
`;

export const TextContainer = styled.div`
  color: #eee;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.5em;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemTitle = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 1em;
  margin: 0;
`;

export const ItemName = styled.p`
  width: 100%;
  text-transform: uppercase;
  font-size: 0.7em;
  text-align: right;
  margin: 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 4px;
  ${({ grey }) =>
    grey ? `background: ${backgroundColour};` : `background: ${fontWhite};`}
`;
