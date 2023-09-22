import styled from '@emotion/styled';
import { device } from '../../Constants';

export const ErrorValidateSvgStyled = styled.svg`
  fill: #d80027;
  display: inline-block;
  width: 16px;
  height: 16px;
  @media ${device.tablet} {
    display: inline-block;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
  }
  @media ${device.desktop} {
  }
`;
export const ValidateStatusErrorTextStyled = styled.div`
  display: inline-block;
  color: #d80027;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: 0.12px;
  /* text-transform: capitalize; */
`;

export const SuccessValidateSvgStyled = styled.svg`
  fill: #3cbf61;
  display: inline-block;
  width: 16px;
  height: 16px;
  @media ${device.tablet} {
    display: inline-block;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
  }
  @media ${device.desktop} {
  }
`;
export const ValidateStatusSuccessTextStyled = styled.div`
  display: inline-block;
  color: #3cbf61;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: 0.12px;
  /* text-transform: capitalize; */
`;
