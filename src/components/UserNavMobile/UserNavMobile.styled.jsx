import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { device } from '../../Constants';

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: ${({ isMenuOpen }) => (isMenuOpen ? 'auto' : 'hidden')};
  @media ${device.tablet} {
    height: 105vh;
  }
`;

export const BurgerMenu = styled.nav`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #e6533c;
  overflow: ${({ isMenuOpen }) => (isMenuOpen ? 'auto' : 'hidden')};

  @media ${device.desktop} {
    display: none;
  }
`;
export const Cross = styled.svg`
  position: absolute;
  top: 3%;
  right: 5%;
  fill: black;
  stroke: rgba(239, 237, 232, 0.3);
  display: block;
  width: 28px;
  height: 28px;
  gap: 16px;
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

export const MenuItem = styled.li``;

export const Link = styled(NavLink)`
  position: relative;
  padding: 10px 27px;
  margin-right: 16px;
  border-radius: 10px;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  text-decoration: none;
  color: white;
  font-weight: 400;
`;
export const LogOutBtnWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  @media ${device.tablet} {
    left: 10%;
  }
`;
