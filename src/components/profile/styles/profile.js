import styled from "styled-components/macro";
import { fontWhite, userIconColours } from "../../../constants/styles";

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.div`
  width: 2.6em;
  height: 2.6em;
  background: ${({ user }) =>
    user ? userIconColours[parseInt(user) - 1] : `dodgerblue`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 5;
`;

export const ImageText = styled.div`
  color: ${fontWhite};
  text-shadow: 1px 1px 2px #222;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Menu = styled.div`
  display:flex;
  right: -30px;
  opacity:  ${({ open }) => (open === true ? `1;` : `0;`)}
  z-index:  ${({ open }) => (open === true ? `4;` : `-1;`)}
  top:  -30px;
  position: absolute;
  transition: all 0.5s;
  flex-direction: column;
  background: rgba(20, 20, 20, 0.75);
  color: #ddd;
  width: 200px;
  height: 500px;
  padding: 20px;
  @media screen and (max-width: 400px) {
    right: -10px;
    top: -20px;
  }
`;

export const Title = styled.div`
  display: flex;
  padding-top: 80px;
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid orange;
  color: ${fontWhite};
  margin-bottom: 15px;
`;

export const Link = styled.button`
  display: flex;
  font-size: 18px;
  padding: 5px;
  border: none;
  background: none;
  color: #ddd;
  &:last-child {
    border-top: 1px solid #aaa;
    padding: 10px 5px;
    margin: 20px 0;
    cursor: pointer;
  }
`;
