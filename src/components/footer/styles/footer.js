import styled from "styled-components/macro";
import { primaryColour, backgroundColour } from "../../../constants/styles";

export const Container = styled.div`
  background: ${backgroundColour};
  margin: 40px;
`;

export const Text = styled.p`
  color: ${backgroundColour};
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 90%;
  background: #ddd;
  height: 1px;
  margin: 15px auto;
`;

export const Section = styled.div`
  display: flex;
  width: 90%;
  margin: 10px auto;
  font-size: 12px;
  color: #ddd;
  flex-wrap: wrap;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  padding: 5px;
  margin-right: 15px;
`;

export const Row = styled.div``;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;
