import styled from '@emotion/styled';
import { device } from '../../Constants';

export const DaySwitchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    padding-top: 40px;
    gap: 8px;
  }
`;
export const StyledDate = styled.span`
  display: flex;
  align-items: center;
  color: #efede8;
  font-weight: 700;
  font-size: 24px;
`;

export const CalendarIcon = styled.svg`
  margin-left: 8px;
  fill: transparent;
  stroke: rgba(239, 137, 100, 1);
  width: 24px;
  height: 24px;
`;

export const StyledButton = styled.button`
  color: ${({ disabled }) => (disabled ? 'gray' : 'white')};
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
`;
