import styled from '@emotion/styled';
import { device } from '../../Constants';

export const DaySwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 200px; */
  height: 100%;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    /* padding-top: 40px; */
    justify-content: center;
  }
`;
export const StyledDate = styled.span`
  display: flex;
  align-items: center;
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const CalendarIcon = styled.svg`
  margin-left: 60px;
  fill: transparent;
  stroke: rgba(239, 237, 232, 1);
  width: 18px;
  height: 18px;
`;

export const StyledButton = styled.button`
  color: ${({ disabled }) => (disabled ? 'gray' : 'white')};
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
`;
