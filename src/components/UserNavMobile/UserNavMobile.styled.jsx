import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { device } from '../../Constants';

export const BurgerMenu = styled.nav`
  position: absolute;
  top: -110%;
  left: -10%;
  height: 100vh;
  width: 100vh;
  background-color: #e6533c;
  overflow: ${({ isMenuOpen }) => (isMenuOpen ? 'hidden' : 'auto')};
`;
export const Cross = styled.div`
  position: absolute;
  left: 55%;
  top: 3%;
`;
export const Menu = styled.ul`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 40%;
  left: 23%;
  gap: 40px;
  @media ${device.tablet} {
    left: 30%;
  }
`;

export const MenuItem = styled.li``;

export const Link = styled(NavLink)`
  position: relative;
  /* z-index: 1; */
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
