import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StyledLink, Ul, Container } from './ExercisesSubcategoriesList.styled';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

export const ExercisesSubcategoriesList = ({ onSelectSubcategory, nameExercise }) => {
  const [subCategories, setSubCategories] = useState('Body parts'); // Початкове значення "Body parts"
  const { subCategories: routeSubCategories } = useParams();

  useEffect(() => {
    if (routeSubCategories) {
       setSubCategories(routeSubCategories);
    }
  }, [routeSubCategories]);

  const exerciseFiltered = useSelector(state => state.exercises.filtered);
  const categorie = exerciseFiltered.filter(categorie => categorie.filter === subCategories);

  const selectSubcategory = (name) => {
    onSelectSubcategory(subCategories);
    nameExercise(name);
  }



  return (
    <Container>
      <Ul>
        {categorie.map(item => (
          <StyledLink
            onClick={() => selectSubcategory(item.name)}
            key={item.name}
            to={`${subCategories}/${item.name}`}
          >
            <ExercisesSubcategoriesItem
              name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              nameCategorie={subCategories}
              img={item.imgURL}
            />
          </StyledLink>
        ))}
      </Ul>
    </Container>
  );
};
