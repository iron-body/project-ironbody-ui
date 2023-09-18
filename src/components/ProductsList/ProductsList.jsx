import { ProductList, ProductItem } from './ProductsList.styled';
import Product from '../Product/Product';

const products = [
  {
    id: 123,
    foodName: 'Grechka',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1234,

    foodName: 'Kartoshka',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1235,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1236,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1237,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1238,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1239,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 12311,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 12312,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 12313,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 12314,

    foodName: 'Rice semolina Garnets ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
];

console.log(products[1])

export default function ProductsList() {
  return (
    <>
      {Array.isArray(products) && (
        <ProductList>
          {products.map(product => {
            return (
              <ProductItem key={product.id}>
                <Product product={product} />
              </ProductItem>
            );
          })}
        </ProductList>
      )}
    </>
  );
}
