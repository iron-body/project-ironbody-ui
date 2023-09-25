import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  NavigateContainer,
  Title,
  NameExercise,
  ButtonItem,
  ButtonIcon
} from './ExercicesPage.styled';
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
  const [nameExercise, setNameExercise] = useState(null);

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

  const capitalizeFirstLetter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Функція для передавання назви  обраної підкатегорії
  const handNameExercise = name => {
    const capitalizedName = capitalizeFirstLetter(name);
    console.log(capitalizedName);
    setNameExercise(capitalizedName);
  };

  return (
    <Container>
      {selectedSubcategory && (
        
          <ButtonItem onClick={() => console.log('ok') }>
            <ButtonIcon alt="" src="/back-array.svg" />
            Back
          </ButtonItem>
        
      )}
      <NavigateContainer name={NavigateContainer}>
        {!selectedSubcategory ? (
          <Title>
            <TitlePage titleText={'Exercices'} />
          </Title>
        ) : (
          <NameExercise>{nameExercise}</NameExercise>
        )}
        <ExercisesCategories
          resetSubcategorySelect={handleResetSubcategorySelect}
        />
      </NavigateContainer>
      {isLoading && 'Request in progress...'}
      {!isLoading && !selectedSubcategory && (
        <ExercisesSubcategoriesList
          onSelectSubcategory={handleSubcategorySelect}
          nameExercise={handNameExercise}
        />
      )}
      {selectedSubcategory && (
        <ExercisesList subcategory={selectedSubcategory} />
      )}
    </Container>
  );
};

export default ExercisesPage;
