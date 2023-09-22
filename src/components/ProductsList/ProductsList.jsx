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

import { useEffect } from 'react';
import { getProductsThunk } from '../../redux/products/productsOperations';
// import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../redux/products/selectors';
import { getFilterValue } from '../../redux/selectors';

export default function ProductsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isLoading, error } = useSelector(getProducts);

  const products = useSelector(getProducts);
  const filterValue = useSelector(getFilterValue);

  const visibleProductsTest = () => {
    const normalizedFilter = filterValue.searchInputProduct.toLowerCase();

    return products.filter(product =>
      product.title.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleProducts = useSelector(getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);


  
  const openModal = product => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    console.log(visibleProductsTest());
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error ? (
        <>
          <ErrorMessege>
            <StartError>Sorry, an error occurred:</StartError> {error.message}
          </ErrorMessege>
          <BottomError>
            Try refreshing the page or check your internet connection.
          </BottomError>
        </>
      ) : (
        <>
          {visibleProducts.length > 0 ? (
            <ProductList>
              {visibleProducts.map(product => (
                <ProductItem key={product._id}>
                  <Product
                    product={product}
                    openModal={() => openModal(product)}
                  />
                </ProductItem>
              ))}
            </ProductList>
          ) : (
            <ErrorMessege>
              <StartError>Sorry, no results were found</StartError> for the
              product filters you selected. You may want to consider other
              search options to find the product you want. Our range is wide and
              you have the opportunity to find more options that suit your
              needs.
            </ErrorMessege>
          )}
        </>
      )}

      {isModalOpen && (
        <BasicModalWindow active={isModalOpen} setActive={setIsModalOpen}>
          {selectedProduct && (
            <AddProductForm
              productCalc={{
                foodName: selectedProduct.foodName,
                calories: selectedProduct.calories,
              }}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </BasicModalWindow>
      )}
    </>
  );
}
