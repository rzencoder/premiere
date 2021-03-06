import styled from "styled-components/macro";
import {
  fontWhite,
  primaryColour,
  primaryColourLight,
} from "../../../constants/styles";

export const Container = styled.div`
  background: url(${({ src }) =>
      src
        ? `../images/backgrounds/${src}.jpg`
        : "../images/backgrounds/collage.jpg"})
    top left / cover no-repeat;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 90%;
    margin: 50px auto;
    max-width: 400px;
    position: relative;
  }
`;

export const Title = styled.h2`
  color: ${fontWhite};
  font-size: 30px;
  margin: 10px 0 20px;
  border-bottom: 2px solid ${primaryColour};
  padding: 5px 0;
`;

export const Content = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: rgba(30, 30, 30, 0.7);
  padding: 40px;
  border-radius: 5px;
  @media screen and (max-width: 400px) {
    max-width: 280px;
    padding: 20px;
    margin: 20px auto;
  }
`;

export const Label = styled.div`
  color: ${fontWhite};
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
  color: ${fontWhite};
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
  color: ${fontWhite};
  font-weight: 600;
  font-size: 14px;
`;

export const Text = styled.div`
  color: ${fontWhite};
  font-size: 14px;
`;

export const Error = styled.div`
  background: #c10b0b;
  color: ${fontWhite};
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 10px;
`;
