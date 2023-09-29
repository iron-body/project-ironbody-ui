import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.nav``;
export const Menu = styled.ul`
  display: flex;
`;
export const Link = styled(NavLink)`
  position: relative;
  z-index: 1;
  padding: 10px 27px;
  margin-right: 16px;
  border-radius: 10px;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  text-decoration: none;
  color: white;
  font-weight: 400;

  transition:
    color 200ms ease-out,
    background-color 200ms ease-out;

  &.active {
    color: white;
    border: 0px;
    background-color: rgba(230, 83, 60, 1);
  }
  &:hover {
    color: rgba(239, 137, 100, 1);
  }
`;
