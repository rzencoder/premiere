import styled from "styled-components/macro";
import { backgroundColour, fontWhite } from "../../../constants/styles";

export const Container = styled.div`
  background: #444;
  padding: 10px 40px 20px;
  @media screen and (max-width: 500px) {
    padding: 10px 20px 20px;
  }
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
  color: #eee;
  flex-wrap: wrap;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
`;

export const Link = styled.a`
  color: ${fontWhite};
  text-decoration: none;
  padding: 5px;
  margin-right: 15px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  @media screen and (max-width: 500px) {
    margin-right: 20px;
  }
`;

export const Break = styled.div`
  width: 100%;
  height: 15px;
  background: linear-gradient(0deg, #444, #353535);
`;
