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
  background: linear-gradient(0deg, ${primaryColour}, #953405);
  height: 10px;
  transform: ${({ rotate }) => (rotate ? `rotate(180deg);` : `none;`)};
`;

export const Title = styled.h3`
  font-size: 28px;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 0;
`;

export const Text = styled.p`
  color: ${backgroundColour};
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const Icon = styled.img`
  width: 130px;
`;
