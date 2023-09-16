import {
  StyledTitle,
  StyledLink,
  StyledWrapper,
  StyledTitleWrapper,
  StyledNoFoundText,
} from '../DayProducts/DayProducts.styled';

import Table from '../Table/Table';

const DayExercises = () => {
  const columns = [];
  const data = [];

  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle>Exercises</StyledTitle>
        <StyledLink href="#">Add exercises</StyledLink>
      </StyledTitleWrapper>
      {!columns || columns.length === 0 || !data || data.length === 0 ? (
        <StyledNoFoundText>Not found exercises</StyledNoFoundText>
      ) : (
        <Table columns={columns} data={data} />
      )}
    </StyledWrapper>
  );
};

export default DayExercises;
