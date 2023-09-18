import {
  Container,
  Title,
  HeaderProducts,
  Overlay,
} from './ProductsPage.styled';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';

export default function ProductsPage() {
  return (
    <Overlay>
      <Container>
        <HeaderProducts>
          <Title>Products</Title>
          <ProductsFilters />
        </HeaderProducts>
        <ProductsList />
      </Container>
    </Overlay>
  );
}
