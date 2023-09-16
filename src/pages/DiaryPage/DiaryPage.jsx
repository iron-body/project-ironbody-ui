import TitlePage from '../../components/TitlePage/TitlePage';
import Container from '../../components/Container/Container';
import DayProducts from '../../components/DayProducts/DayProducts';
import DayExercises from '../../components/DayExercises/DayExercises';
import DayDashboard from '../../components/DayDashboard/DayDashboard';

import {
  StyledMainContentWrapper,
  StyledTablesWrapper,
} from '../DiaryPage/DiaryPage.styled';

const DiaryPage = () => {
  return (
    <main>
      <Container>
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
