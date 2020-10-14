import styled from "styled-components/macro";
import {
  primaryColour,
  backgroundColour,
  primaryColourLight,
} from "../../../constants/styles";

export const Container = styled.div`
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

export const Item = styled.div`
  ${({ active }) =>
    active
      ? `color: white; border-bottom: 3px solid ${primaryColour};`
      : `color: #bbb; border-bottom: none;`}
  font-weight: 600;
  font-size: 20px;
  margin: 0 10px;
  padding: 5px;
`;

export const Profile = styled.div`
  position: relative;
`;

export const Search = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ProfileImage = styled.div`
  width: 2.6em;
  height: 2.6em;
  background: dodgerblue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImageText = styled.div`
  color: white;
  text-shadow: 1px 1px 2px #222;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ProfileMenu = styled.div`
  ${({ open }) => (open ? `display: flex;` : `display: none;`)}
  position: absolute;
  right: 0;
  top: 60px;
`;

export const BrowseLogo = styled.img`
  width: 200px;
`;

export const SearchIcon = styled.img`
  width: 1.5em;
`;

export const SearchBox = styled.div`
  width: 15em;
`;

export const Group = styled.div`
  display: flex;
`;
