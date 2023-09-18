import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BurgerMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #e6533c;
`;
export const Cross = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
export const Menu = styled.ul``;

export const MenuItem = styled.li``;

export const Link = styled(NavLink)``;
