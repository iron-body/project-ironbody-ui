import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import styled from '@emotion/styled';
import { device } from '../../Constants';

export const HeaderContainer = styled.div`
  position: absolute;
  top: 24px;
  z-index: 888;
  display: flex;
  justify-content: center;
  max-width: ${375 - 20 * 2}px;
  padding: 0 20px;
  @media ${device.tablet} {
    top: 32px;
    max-width: ${768 - 32 * 2}px;
    padding: 0 32px;
  }
  @media ${device.desktop} {
    top: 32px;
    max-width: ${1440 - 96 * 2}px;
    padding: 0 96x;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  ${'' /* align-items: center; */}
`;

export const StyledLink = styled(Link)`
  ${'' /* padding: 8px 16px; */}
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
