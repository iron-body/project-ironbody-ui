import styled from 'styled-components';

export const StyledDashboardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 48px;
`;

export const StyledDashboardItem = styled.li`
  box-sizing: border-box;
  flex-basis: calc((100% - 16px) / 2);
  padding: 16px 0 16px 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  &:nth-child(-n + 2) {
    background: #e6533c;
  }
`;

export const StyledDashboardTitleText = styled.p`
  margin-bottom: 30px;
  color: rgba(239, 237, 232, 0.8);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  line-height: 18px;
`;

export const StyledDashboardICalcText = styled.p`
  box-sizing: border-box;
  color: #efede8;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export const StyledNotificationText = styled.p`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledExclamationIcon = styled.svg`
  display: block;
  fill: #efa082;
`;
