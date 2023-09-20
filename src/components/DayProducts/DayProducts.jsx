import {
  StyledTitle,
  StyledLink,
  StyledWrapper,
  StyledTitleWrapper,
  StyledNoFoundText,
} from './DayProducts.styled';
import ProductsTable from '../ProductsTable/ProductsTable';

const DayProducts = () => {
  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle>Products</StyledTitle>
        <StyledLink href="/products">Add product &rarr;</StyledLink>
      </StyledTitleWrapper>
      {!(<ProductsTable />) ? (
        <StyledNoFoundText>Not found products</StyledNoFoundText>
      ) : (
        <ProductsTable />
      )}
    </StyledWrapper>
  );
};

export default DayProducts;
