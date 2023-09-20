import TitlePage from '../../components/TitlePage/TitlePage';
import Container from '../../components/Container/Container';
import DayProducts from '../../components/DayProducts/DayProducts';
import DayExercises from '../../components/DayExercises/DayExercises';
import DayDashboard from '../../components/DayDashboard/DayDashboard';

import { StyledMainContentWrapper, StyledTablesWrapper } from '../DiaryPage/DiaryPage.styled';
import DaySwitch from '../../components/DaySwitch/DaySwitch';

const DiaryPage = () => {
  return (
    <main>
      <Container>
        <DaySwitch />
        <TitlePage titleText="Diary" />

        <StyledMainContentWrapper>
          <StyledTablesWrapper>
            <DayProducts />
            <DayExercises />
          </StyledTablesWrapper>
          <DayDashboard />
        </StyledMainContentWrapper>
      </Container>
    </main>
  );
};

export default DiaryPage;
