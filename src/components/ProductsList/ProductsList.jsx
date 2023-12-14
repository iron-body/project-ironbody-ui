import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getInitial, getProducts } from '../../redux/products/selectors';

import InfiniteScroll from 'react-infinite-scroll-component';
import { ToastContainer } from 'react-toastify';
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
import Loader from '../../components/Loader/Loader';

export default function ProductsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isLoading } = useSelector(getInitial);
  const [itemsToShow, setItemsToShow] = useState(10);
  const increment = 10;

  const visibleProducts = useSelector(getProducts);

  const openModal = product => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + increment);
  };

  return (
    <>
      <ToastContainer autoClose={1500} />
      {isLoading && <Loader />}

      {visibleProducts.length > 0 ? (
        <InfiniteScroll
          dataLength={itemsToShow}
          next={loadMore}
          hasMore={itemsToShow < visibleProducts.length}
          scrollableTarget="productList"
        >
          <ProductList id="productList">
            {visibleProducts.slice(0, itemsToShow).map(product => (
              <ProductItem key={product._id}>
                <Product key={product._id} product={product} openModal={() => openModal(product)} />
              </ProductItem>
            ))}
          </ProductList>
        </InfiniteScroll>
      ) : (
        <ErrorMessege>
          <StartError>Sorry, no results were found</StartError> for the product filters you
          selected. You may want to consider other search options to find the product you want. Our
          range is wide and you have the opportunity to find more options that suit your needs.
          <BottomError>Try refreshing the page or check your internet connection.</BottomError>
        </ErrorMessege>
      )}

      {isModalOpen && (
        <BasicModalWindow active={isModalOpen} setActive={setIsModalOpen}>
          {selectedProduct && (
            <AddProductForm
              productCalc={{
                title: selectedProduct.title,
                calories: selectedProduct.calories,
                category: selectedProduct.category,
                recommended: selectedProduct.recommended,
                _id: selectedProduct._id,
              }}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </BasicModalWindow>
      )}
    </>
  );
}
