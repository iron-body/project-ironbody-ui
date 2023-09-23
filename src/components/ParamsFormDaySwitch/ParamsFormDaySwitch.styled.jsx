import styled from '@emotion/styled';
import { device } from '../../Constants';

export const DaySwitchContainer = styled.div`
  padding: 14px 0px 14px 14px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;

  background-color: transparent;
  border: 1px solid var(--orange);
  color: var(--color-whitesmoke-100);
  border-radius: 12px;
  outline: none;

  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3;

  /* @media ${device.tablet} {
  }
  @media ${device.desktop} {
    margin-top: 50px;
    padding-top: 52px;
    gap: 8px;
  } */
`;
export const StyledDate = styled.span`
  box-sizing: border-box;
  width: 100%;
  height: 46px;

  background-color: transparent;
  color: var(--color-whitesmoke-100);
  font-family: var(--headline-style-mobile-h1);
  font-size: var(--font-size-xm);
  font-weight: 400;
  line-height: 1.3;
`;

export const CalendarIcon = styled.svg`
  position: absolute;
  top: 372px;
  margin-left: 26px;
  fill: transparent;
  stroke: var(--white);
  width: 24px;
  height: 24px;

  @media ${device.tablet} {
    top: 432px;
  }

  @media ${device.desktop} {
    top: 444px;
  }
`;

export const StyledButton = styled.button`
  color: ${({ disabled }) => (disabled ? 'gray' : 'white')};
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
`;
