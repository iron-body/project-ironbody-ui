import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StyledLink, Ul, Container} from './ExercisesSubcategoriesList.styled';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
// import filters from '../../filters.json';

export const ExercisesSubcategoriesList = () => {
  const { subCategories } = useParams();
  const exerciseFiltered = useSelector(state => state.exercises.filtered);
  const categorie = exerciseFiltered.filter(
    categorie => categorie.filter === subCategories,
  );
  return (
    <Container> <Ul>
    {categorie.map(item => (
      <StyledLink key={item.name} to={`${item.name}`}>
        <ExercisesSubcategoriesItem
          name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          nameCategorie={subCategories}
          img={item.imgURL}
        />
      </StyledLink>
    ))}
  </Ul></Container>
    
   
  );
};
