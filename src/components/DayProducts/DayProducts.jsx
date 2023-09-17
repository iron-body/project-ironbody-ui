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
      Header: 'Title',
      accessor: 'col1',
    },
    {
      Header: 'Category',
      accessor: 'col2',
    },
    {
      Header: 'Calories',
      accessor: 'col3',
    },
    {
      Header: 'Weight',
      accessor: 'col4',
    },
    {
      Header: 'Recommend',
      accessor: 'col5',
    },
    {
      Header: '',
      accessor: 'col6',
    },
  ];

  // array data we should take from backEnd, save in redux store and then coll it from there in this component
  const data = [
    {
      col1: ' 1',
      col2: ' 2',
      col3: ' 3',
      col4: ' 4',
      col5: ' 5',
      col6: ' 6',
    },
    {
      col1: ' 7',
      col2: ' 8',
      col3: ' 9',
      col4: ' 10',
      col5: ' 11',
      col6: ' 12',
    },
    {
      col1: ' 13',
      col2: ' 14',
      col3: ' 15',
      col4: ' 16',
      col5: ' 17',
      col6: ' 18',
    },
    {
      col1: ' 19',
      col2: ' 20',
      col3: ' 21',
      col4: ' 22',
      col5: ' 23',
      col6: ' 24',
    },
    {
      col1: ' 25',
      col2: ' 26',
      col3: ' 27',
      col4: ' 28',
      col5: ' 29',
      col6: ' 30',
    },
  ];

  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle>Products</StyledTitle>
        <StyledLink href="/products">Add product</StyledLink>
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
