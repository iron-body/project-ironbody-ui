import { Container, Title, StyledLink } from './ExercicesPage.styled';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';


const ExercisesPage = () => {
  return (
    <Container>
      <Title>Exercises</Title>
      <ExercisesCategories />

    </Container>
  );
};

export default ExercisesPage;
