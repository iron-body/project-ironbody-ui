import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { device } from '../../Constants';

export const BurgerMenu = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  /* width: 200px; */
  padding: 19px 20px 21px 20px;
  background-color: #e6533c;
  overflow: ${({ isMenuOpen }) => (isMenuOpen ? 'hidden' : 'auto')};
  @media ${device.tablet} {
    width: 350px;
    padding: 26px 32px 32px 32px;
  }

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
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 30%;
  left: 33%;
  gap: 40px;
  @media ${device.tablet} {
    left: 33%;
  }
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
