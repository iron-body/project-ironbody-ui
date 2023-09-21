import { StyledLink, Ul, Container} from './ExercisesSubcategoriesList.styled';
import { useParams } from 'react-router-dom';

import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import filters from '../../filters.json';

export const ExercisesSubcategoriesList = () => {
  const { subCategories } = useParams();
  const categorie = filters.filter(
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
