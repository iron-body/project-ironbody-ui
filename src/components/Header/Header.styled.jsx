import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import styled from '@emotion/styled';
import { device } from '../../Constants';

export const HeaderContainer = styled.div`
  position: relative;
  top: 20px;
  width: 374px;
  //** for use header controls**/
  z-index: 500;
  display: flex;
  ${'' /* justify-content: stretch; */}
  width: ${375 - 20 * 2}px;
  padding: 0 20px;
  @media ${device.mobile} {
    position: relative;
    top: 24px;

    width: ${375 - 20}px;
    ${'' /* width: 375px; */}
    padding: 0 20px;
  }

  @media ${device.tablet} {
    position: relative;
    justify-content: space-between;
    display: flex;
    top: 32px;
    width: ${768 - 2 * 32}px;
    padding: 0;
  }
  @media ${device.desktop} {
    position: relative;
    justify-content: space-between;
    top: 32px;
    left: 0px;
    padding: 0;
    width: ${1440 - 2 * 96}px;
    display: flex;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;
