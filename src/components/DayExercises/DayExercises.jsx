import {
  StyledTitle,
  StyledLink,
  StyledWrapper,
  StyledTitleWrapper,
  StyledNoFoundText,
} from '../DayProducts/DayProducts.styled';
import ExercisesTable from '../ExercisesTable/ExercisesTable';

// import Table from '../Table/Table';

const DayExercises = () => {
  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle>Exercises</StyledTitle>
        <StyledLink href="/exercises">Add exercises &rarr;</StyledLink>
      </StyledTitleWrapper>
      {!(<ExercisesTable />) ? (
        <StyledNoFoundText>Not found products</StyledNoFoundText>
      ) : (
        <ExercisesTable />
      )}
    </StyledWrapper>
  );
};

export default DayExercises;
