import styled from "styled-components/macro";

export const Container = styled.div`
  width: 180px;
  padding: 20px;
  position: absolute;
  background: #f9f950;
  top: -30px;
  right: -30px;
  transform: rotate(10deg);
  @media screen and (max-width: 500px) {
    width: 140px;
    font-size: 14px;
    padding: 20px 5px 5px;
    right: 0px;
    top: -20px;
  }
`;

export const Text = styled.div`
  padding: 2px 0;
`;

export const Button = styled.button`
  font-size: 20px;
  position: absolute;
  right: 5px;
  top: 5px;
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;
