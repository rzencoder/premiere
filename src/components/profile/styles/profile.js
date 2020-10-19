import styled from "styled-components/macro";
import {
  primaryColour,
  backgroundColour,
  primaryColourLight,
} from "../../../constants/styles";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background: ${primaryColour};
  font-size: 1em;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
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

export const Image = styled.div`
  width: 2.6em;
  height: 2.6em;
  background: dodgerblue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 5;
`;

export const ImageText = styled.div`
  color: white;
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
  color: #ddd;
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

export const Title = styled.div`
  display: flex;
  padding-top: 80px;
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid orange;
  color: white;
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
