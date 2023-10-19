import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  NavigateContainer,
  Title,
  NameExercise,
  ButtonIcon,
  StyledNavLink,
} from './ExercicesPage.styled';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import TitlePage from '../../components/TitlePage/TitlePage';
import { ExercisesSubcategoriesList } from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { ExercisesList } from '../../components/ExercisesList/ExercisesList';
import Loader from '../../components/Loader/Loader';
import {
  fetchFilteredExercises,
  fetchExercises,
} from '../../redux/exercises/operations';
import { getLoading } from '../../redux/selectors';
import Icon from '/back-array-grey.svg';


const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const location = useLocation();

  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [nameExercise, setNameExercise] = useState(null);

  const [subCategories, setSubCategories] = useState('Body parts');
  const { subCategories: routeSubCategories } = useParams();

  useEffect(() => {
    if (routeSubCategories) {
      setSubCategories(routeSubCategories);
    }
  }, [routeSubCategories]);

  const dinamicFilter = { filter: subCategories };

  useEffect(() => {
    dispatch(fetchFilteredExercises(dinamicFilter))
      .then(result => {
        // console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
    dispatch(fetchExercises());
  }, [subCategories]);

  const handleSubcategorySelect = subcategory => {
    setSelectedSubcategory(subcategory);
  };

  const handleResetSubcategorySelect = () => {
    setSelectedSubcategory(null);
  };

  const capitalizeFirstLetter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const handNameExercise = name => {
    const capitalizedName = capitalizeFirstLetter(name);
    setNameExercise(capitalizedName);
  };

  const clearSelectedSubcategory = () => {
    setSelectedSubcategory(null);
  };

  return (
    <Container selectedSubcategory={selectedSubcategory}>
      <StyledNavLink
        to={selectedSubcategory}
        onClick={() => handleResetSubcategorySelect()}
        activeClassName="
            active"
        selectedSubcategory={selectedSubcategory}
      >
        <ButtonIcon alt="" src={Icon} /> Back
      </StyledNavLink>

      <NavigateContainer>
        {!selectedSubcategory ? (
          <Title>
            <TitlePage titleText={'Exercices'} />
          </Title>
        ) : (
          <NameExercise>{nameExercise}</NameExercise>
        )}
        <ExercisesCategories
          resetSubcategorySelect={handleResetSubcategorySelect}
          subCategories={subCategories}
        />
      </NavigateContainer>
      {isLoading && <Loader />}
      {!isLoading && !selectedSubcategory && (
        <ExercisesSubcategoriesList
          onSelectSubcategory={handleSubcategorySelect}
          nameExercise={handNameExercise}
          subCategories={subCategories}
        />
      )}
      {selectedSubcategory && (
        <ExercisesList subcategory={selectedSubcategory} />
      )}
    </Container>
  );
};

export default ExercisesPage;
