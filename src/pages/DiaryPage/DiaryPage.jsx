import TitlePage from '../../components/TitlePage/TitlePage';
import Container from '../../components/Container/Container';
import DayProducts from '../../components/DayProducts/DayProducts';
import DayExercises from '../../components/DayExercises/DayExercises';
import DayDashboard from '../../components/DayDashboard/DayDashboard';
import { useDispatch } from 'react-redux';

import {
  StyledMainContentWrapper,
  StyledTablesWrapper,
  StyledTitleContainer,
} from '../DiaryPage/DiaryPage.styled';
import DaySwitch from '../../components/DaySwitch/DaySwitch';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { authOperations } from '../../redux/auth/authOperations';

const DiaryPage = () => {
  const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.refreshCurrentUser());
  //   return () => {};
  // }, [dispatch]);

  return (
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
  );
};

export default DiaryPage;
