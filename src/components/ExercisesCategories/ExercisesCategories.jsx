import { Container, StyledLink } from './ExercisesCategories.styled';

// eslint-disable-next-line react/prop-types
const ExercisesCategories = ({ resetSubcategorySelect ,subCategories}) => {

  const resetSubcategory = () => {
    resetSubcategorySelect();
  };

  return (
    <Container>
      <StyledLink onClick={() => resetSubcategory()} to="/exercises/Body parts"
      className={subCategories === 'Body parts'? 'active' : ''}>
        Body parts
      </StyledLink>
      <StyledLink onClick={() => resetSubcategory()} to="/exercises/Muscles"
      className={subCategories === 'Muscles'? 'active' : ''}>
        Muscles
      </StyledLink>
      <StyledLink onClick={() => resetSubcategory()} to="/exercises/Equipment"
      className={subCategories === 'Equipment'? 'active' : ''}>
        Equipment
      </StyledLink>
    </Container>
  );
};

export default ExercisesCategories;
