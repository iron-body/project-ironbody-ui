import styled from '@emotion/styled';
import { device } from '../../Constants';
// import { Link } from 'react-router-dom';

export const LogoStyled = styled.div`
  display: flex;
  align-self: center;
  gap: var(--gap-8px);
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    gap: var(--gap-8px);
  }
`;

export const VectorIconSvg = styled.svg`
  position: relative;
  /* fill: var(--orange); */
  fill: ${props => props.stateColorSVGVector};
  display: block;

  border-radius: var(--br-1px);
  width: 36px;
  height: 13px;
  @media ${device.tablet} {
    border-radius: var(--br-1px);
    width: 44px;
    height: 17px;
  }
  @media ${device.desktop} {
    border-radius: var(--br-1px);
    width: 44px;
    height: 17px;
  }
`;

export const PowerpulseIconSvg = styled.svg`
  fill: var(--white);
  display: block;
  width: 82px;
  height: 12px;
  @media ${device.tablet} {
    width: 99.53px;
    display: inline-block;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
  }
  @media ${device.desktop} {
    width: 99.53px;
  }
`;
