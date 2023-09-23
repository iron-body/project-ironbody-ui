import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './ExercicesPage.styled';
import { ExercisesCategories } from '../../components/ExercisesCategories/ExercisesCategories';
import TitlePage from '../../components/TitlePage/TitlePage';
import { ExercisesSubcategoriesList } from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { fetchExercises, fetchFilteredExercises } from '../../redux/operations';
import { getIsLoading } from '../../redux/selectors';


const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchFilteredExercises());
    dispatch(fetchExercises())
  }, [dispatch]);

  return (
    <Container>
      <TitlePage titleText={'Exercices'} />
      <ExercisesCategories />
      <div>{isLoading && 'Request in progress...'||<ExercisesSubcategoriesList />}</div>
      
      
    </Container>
  );
};

export default ExercisesPage;
