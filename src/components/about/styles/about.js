import styled from "styled-components/macro";
import { primaryColour, backgroundColour } from "../../../constants/styles";

export const Container = styled.div`
  background: ${primaryColour};
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  max-width: 300px;
  text-align: center;
`;

export const Divider = styled.div`
  width: 100%;
  background: white;
  height: 4px;
`;

export const Title = styled.h3`
  font-size: 34px;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 0;
`;

export const Text = styled.p`
  color: ${backgroundColour};
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

export const Icon = styled.img`
  width: 11em;
`;
