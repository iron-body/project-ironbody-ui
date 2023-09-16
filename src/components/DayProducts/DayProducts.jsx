import {
  StyledTitle,
  StyledLink,
  StyledWrapper,
  StyledTitleWrapper,
} from './DayProducts.styled';
import Table from '../Table/Table';

const DayProducts = () => {
  const columns = [
    {
      Header: 'Стовпець 1',
      accessor: 'col1',
    },
    {
      Header: 'Стовпець 2',
      accessor: 'col2',
    },
    {
      Header: 'Стовпець 3',
      accessor: 'col3',
    },
  ];

  const data = [
    {
      col1: ' 1',
      col2: ' 2',
      col3: ' 3',
    },
    {
      col1: ' 3',
      col2: ' 4',
      col3: ' 5',
    },
    {
      col1: ' 6',
      col2: ' 7',
      col3: ' 8',
    },
    {
      col1: ' 6',
      col2: ' 7',
      col3: ' 8',
    },
    {
      col1: ' 6',
      col2: ' 7',
      col3: ' 8',
    },
    {
      col1: ' 6',
      col2: ' 7',
      col3: ' 8',
    },
    {
      col1: ' 6',
      col2: ' 7',
      col3: ' 8',
    },
    {
      col1: ' 6',
      col2: ' 7',
      col3: ' 8',
    },
  ];

  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle>Products</StyledTitle>
        <StyledLink href="#">Add product</StyledLink>
      </StyledTitleWrapper>
      {!columns || columns.length === 0 || !data || data.length === 0 ? (
        <p>Not found products</p>
      ) : (
        <Table columns={columns} data={data} />
      )}
    </StyledWrapper>
  );
};

export default DayProducts;
