import styled from "styled-components/macro";
import {
  primaryColour,
  backgroundColour,
  primaryColourLight,
} from "../../../constants/styles";

export const Container = styled.div`
  background: url(${({ src }) =>
      src ? `../images/${src}.png` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  font-size: 30px;
  margin: 10px 0 20px;
  border-bottom: 2px solid ${primaryColour};
  padding: 5px 0;
`;

export const Background = styled.div``;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(30, 30, 30, 0.7);
  padding: 40px;
  border-radius: 5px;
  width: 90%;
  margin: 50px auto;
  max-width: 400px;
  @media screen and (max-width: 400px) {
    max-width: 280px;
    padding: 20px;
    margin: 20px auto;
  }
`;

export const Label = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 0;
`;

export const Input = styled.input`
  background: #484848;
  border-radius: 4px;
  margin: 5px 0;
  padding: 10px;
  font-size: 18px;
  color: white;
  border: none;
`;

export const Submit = styled.button`
  border: none;
  color: white;
  background: ${primaryColour};
  border-radius: 4px;
  padding: 10px 20px;
  margin: 15px 0;
  font-weight: 600;
  font-size: 20px;
  transition: 0.3s background;
  &:hover {
    background: ${primaryColourLight};
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const Link = styled.span`
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

export const Text = styled.div`
  color: white;
  font-size: 14px;
`;

export const Error = styled.div`
  background: #c10b0b;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 10px;
`;
