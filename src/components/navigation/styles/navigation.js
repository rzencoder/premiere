import styled from "styled-components/macro";
import {
  primaryColour,
  primaryColourLight,
  fontGrey,
  fontWhite,
} from "../../../constants/styles";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 30px 30px 10px;
  font-size: 12px;
  @media screen and (min-width: 300px) {
    font-size: calc(12px + 6 * ((100vw - 300px) / 700));
  }
  @media screen and (max-width: 400px) {
    padding: 20px 10px 10px;
  }
  @media screen and (max-width: 550px) {
    align-items: flex-start;
  }
`;

export const Button = styled.button`
  background: ${primaryColour};
  font-size: 1em;
  padding: 10px 20px;
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

export const Logo = styled.img`
  width: 15em;
`;

export const Section = styled.div`
  display: flex;
`;

export const Item = styled.button`
  ${({ active }) => (active ? `color: white;` : `color: #bbb;`)}
  font-weight: 600;
  font-size: 20px;
  margin: 0 10px;
  padding: 8px 5px 5px 5px;
  cursor: pointer;
  border: none;
  background: none;
`;

export const BrowseLogo = styled.div`
  margin-right: 40px;
  > img {
    width: 200px;
  }
  @media screen and (max-width: 550px) {
    margin-right: 30px;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 10px;
  @media screen and (max-width: 750px) {
    position: absolute;
    top: 100px;
    right 26.5px;
  }
  @media screen and (max-width: 400px) {
    right 6.5px;
  }
`;

export const SearchIcon = styled.img`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
`;

export const SearchBox = styled.input`
  background: rgba(20, 20, 20, 0.6);
  border: none;
  margin: 0 10px;
  width: ${({ open }) => (open === true ? "10em" : "0px")};
  opacity: ${({ open }) => (open === true ? "1" : "0")};
  transition: all 0.3s;
  padding: 5px 10px;
  color: ${fontGrey};
  border-radius: 5px;
`;

export const Group = styled.div`
  display: flex;
  @media screen and (max-width: 550px) {
    &:first-child {
      align-items: center;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 750px) {
    &:last-child {
      align-items: flex-end;
      flex-direction: column-reverse;
    }
  }
`;
