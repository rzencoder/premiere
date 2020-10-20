import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
`;

export const Group = styled.div`
  position: relative;
  margin: auto 20px;
  width: 100%;
  max-width: 800px;
  video {
    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;
