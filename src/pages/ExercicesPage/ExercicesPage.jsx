import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, NavigateContainer, Title } from './ExercicesPage.styled';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import TitlePage from '../../components/TitlePage/TitlePage';
import { ExercisesSubcategoriesList } from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { ExercisesList } from '../../components/ExercisesList/ExercisesList';
import { fetchExercises, fetchFilteredExercises } from '../../redux/operations';
import { getIsLoading } from '../../redux/selectors';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  // Додайте стан для відстеження обраного підкатегорії
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    dispatch(fetchFilteredExercises());
    dispatch(fetchExercises());
  }, [dispatch]);

  // Функція для зміни обраної підкатегорії
  const handleSubcategorySelect = subcategory => {
    setSelectedSubcategory(subcategory);
  };
  const handleResetSubcategorySelect = () => {
    setSelectedSubcategory(null);
  };

  return (
    <Container>
      <NavigateContainer>
        {!selectedSubcategory && (
          <Title>
            <TitlePage titleText={'Exercices'} />
          </Title>
        )}
        <ExercisesCategories resetSubcategorySelect={handleResetSubcategorySelect} />
      </NavigateContainer>
      {isLoading && 'Request in progress...'}
      {!isLoading && !selectedSubcategory && (
        <ExercisesSubcategoriesList onSelectSubcategory={handleSubcategorySelect} />
      )}
      {selectedSubcategory && <ExercisesList subcategory={selectedSubcategory} />}
    </Container>
  );
};

export default ExercisesPage;
