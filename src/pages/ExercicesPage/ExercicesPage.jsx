import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './ExercicesPage.styled';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
import TitlePage from '../../components/TitlePage/TitlePage';
import { ExercisesSubcategoriesList } from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { fetchExercises, fetchFilteredExercises } from '../../redux/operations';
import { getLoading } from '../../redux/selectors';
// import Timer from '../../components/Timer/Timer';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchFilteredExercises());
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <Container>
      <TitlePage titleText={'Exercices'} />
      {/* <Timer/> */}
      <ExercisesCategories />
      {/* <div>{isLoading && 'Request in progress...'||<ExercisesSubcategoriesList />}</div> */}
      <ExercisesSubcategoriesList />
    </Container>
  );
};

export default ExercisesPage;
