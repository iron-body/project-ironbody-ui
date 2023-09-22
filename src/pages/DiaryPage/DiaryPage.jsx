import TitlePage from '../../components/TitlePage/TitlePage';
import Container from '../../components/Container/Container';
import DayProducts from '../../components/DayProducts/DayProducts';
import DayExercises from '../../components/DayExercises/DayExercises';
import DayDashboard from '../../components/DayDashboard/DayDashboard';

import {
  StyledMainContentWrapper,
  StyledTablesWrapper,
  StyledTitleContainer,
} from '../DiaryPage/DiaryPage.styled';
import DaySwitch from '../../components/DaySwitch/DaySwitch';
import { useMediaQuery } from '@mui/material';

const DiaryPage = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  return (
    <main>
      <Container>
        <StyledTitleContainer>
          {!isTabletOrMobile && <DaySwitch />}
          <TitlePage titleText="Diary" />
          {isTabletOrMobile && <DaySwitch />}
        </StyledTitleContainer>
        <StyledMainContentWrapper>
          {isTabletOrMobile && <DayDashboard />}
          <StyledTablesWrapper>
            <DayProducts />
            <DayExercises />
          </StyledTablesWrapper>
          {!isTabletOrMobile && <DayDashboard />}
        </StyledMainContentWrapper>
      </Container>
    </main>
  );
};

export default DiaryPage;
