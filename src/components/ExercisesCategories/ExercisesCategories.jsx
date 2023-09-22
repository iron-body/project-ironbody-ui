import {Container, StyledLink} from './ExercisesCategories.styled';



const ExercisesCategories = () => {
    return (
      <Container>
        <StyledLink to="/exercises/Body parts">Body parts</StyledLink>
        <StyledLink to="/exercises/Muscles">Muscles</StyledLink>
        <StyledLink to="/exercises/Equipment">Equipment</StyledLink>
        
      </Container>
    );
  };
  
  export default ExercisesCategories;