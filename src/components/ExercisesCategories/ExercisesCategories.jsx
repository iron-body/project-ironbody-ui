import { Container, StyledLink } from './ExercisesCategories.styled';

// eslint-disable-next-line react/prop-types
const ExercisesCategories = ({ resetSubcategorySelect }) => {
  const resetSubcategory = () => {
    resetSubcategorySelect();
  };

  return (
    <Container>
      <StyledLink onClick={() => resetSubcategory()} to="/exercises/Body parts">
        Body parts
      </StyledLink>
      <StyledLink onClick={() => resetSubcategory()} to="/exercises/Muscles">
        Muscles
      </StyledLink>
      <StyledLink onClick={() => resetSubcategory()} to="/exercises/Equipment">
        Equipment
      </StyledLink>
    </Container>
  );
};

export default ExercisesCategories;
