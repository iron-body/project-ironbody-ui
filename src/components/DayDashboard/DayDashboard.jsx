// import { PropTypes } from 'prop-types';
import {
  StyledDashboardList,
  StyledDashboardItem,
  StyledDashboardTitleText,
  StyledDashboardICalcText,
  StyledNotificationText,
} from './DayDashboard.styled';

const DayDashboard = () => {
  return (
    <aside>
      <StyledDashboardList>
        <StyledDashboardItem>
          <StyledDashboardTitleText>
            Daily calorie intake
          </StyledDashboardTitleText>
          <StyledDashboardICalcText>2200</StyledDashboardICalcText>
        </StyledDashboardItem>
        <StyledDashboardItem>
          <StyledDashboardTitleText>
            Daily norm of sports
          </StyledDashboardTitleText>
          <StyledDashboardICalcText>110 min</StyledDashboardICalcText>
        </StyledDashboardItem>
        <StyledDashboardItem>
          <StyledDashboardTitleText>Сalories consumed</StyledDashboardTitleText>
          <StyledDashboardICalcText>707</StyledDashboardICalcText>
        </StyledDashboardItem>
        <StyledDashboardItem>
          <StyledDashboardTitleText>Сalories burned</StyledDashboardTitleText>
          <StyledDashboardICalcText>855</StyledDashboardICalcText>
        </StyledDashboardItem>
        <StyledDashboardItem>
          <StyledDashboardTitleText>
            The rest of the calories
          </StyledDashboardTitleText>
          <StyledDashboardICalcText>1493</StyledDashboardICalcText>
        </StyledDashboardItem>
        <StyledDashboardItem>
          <StyledDashboardTitleText>
            The rest of sports
          </StyledDashboardTitleText>
          <StyledDashboardICalcText>85 min</StyledDashboardICalcText>
        </StyledDashboardItem>
      </StyledDashboardList>
      <StyledNotificationText>
        Record all your meals in a calorie diary every day. This will help me be
        aware of my nutrition and make me responsible for my choices.
      </StyledNotificationText>
    </aside>
  );
};

// TitlePage.propTypes = {
//   titleText: PropTypes.string,
// };

export default DayDashboard;
