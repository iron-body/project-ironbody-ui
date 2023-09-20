import { useState } from 'react';
import {
  ProductList,
  ProductItem,
  ErrorMessege,
  BottomError,
  StartError,
} from './ProductsList.styled';
import Product from '../Product/Product';
import BasicModalWindow from '../BasicModalWindow/BasicModalWindow';
import AddProductForm from '../AddProductForm/AddProductForm';

const products = [
  {
    id: 123,
    foodName: 'Varena Grechka',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1234,
    foodName: 'Smajena kartoshka ;)',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1235,
    foodName: 'Buterbrod z kovbaskoy ',
    calories: 340,
    category: 'Cereals',
    weight: 100,
  },
  {
    id: 1236,
    foodName: 'Buterbrod z surom',
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

export default function ProductsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    console.log(product);
  };

  return (
    <>
      {Array.isArray(products) && products.length > 0 ? (
        <ProductList>
          {products.map(product => {
            return (
              <ProductItem key={product.id}>
                <Product
                  product={product}
                  openModal={() => openModal(product)}
                />
              </ProductItem>
            );
          })}
        </ProductList>
      ) : (
        <>
          <ErrorMessege>
            <StartError>Sorry, no results were found</StartError> for the
            product filters you selected. You may want to consider other search
            options to find the product you want. Our range is wide and you have
            the opportunity to find more options that suit your needs.
          </ErrorMessege>
          <BottomError>Try changing the search parameters.</BottomError>
        </>
      )}

      {isModalOpen && (
        <BasicModalWindow active={isModalOpen} setActive={setIsModalOpen}>
          {selectedProduct && (
            <AddProductForm
              productCalc={{
                foodName: selectedProduct.foodName,
                calories: selectedProduct.calories,
              }} onClose={() => setIsModalOpen(false)}
            ></AddProductForm>
          )}
        </BasicModalWindow>
      )}
    </>
  );
}
