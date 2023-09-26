/* eslint-disable react/prop-types */
import { Container, Title, Categorie } from './ExercisesSubcategoriesItem.styled';

export const ExercisesSubcategoriesItem = ({ name, img, nameCategorie }) => {
  return (
    <Container key={`${name}`} img={img}>
      <Title>{`${name}`}</Title>
      <Categorie>{`${nameCategorie}`}</Categorie>
    </Container>
  );
};
