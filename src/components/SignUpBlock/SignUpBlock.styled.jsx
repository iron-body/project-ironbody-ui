import styled from '@emotion/styled';
import { device } from '../../Constants';
import { Link } from 'react-router-dom';

export const SignUpBlockStyled = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0px;
  color: var(--color-whitesmoke-50);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  @media ${device.mobile} {
    position: absolute;
    top: 295px;
    left: 0px;

    margin-left: 0px;
    color: var(--color-whitesmoke-50);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }
  @media ${device.tablet} {
    margin: 0;
    top: 372px;
    left: 15px;
  }
  @media ${device.desktop} {
    margin: 0;
    top: 372px;
    left: 15px;
  }
`;

export const SignUpStyledLink = styled(Link)`
  color: var(--white);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`;
