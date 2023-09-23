import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk, filterProductsThunk } from '../../redux/products/productsOperations';
import { getProducts } from '../../redux/products/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';
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
import { getFilterValue } from '../../redux/selectors';

export default function ProductsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isLoading, error } = useSelector(getProducts);
  const [itemsToShow, setItemsToShow] = useState(10);
  const increment = 10;

  const filterValue = useSelector(getFilterValue);

    useEffect(() => {
    dispatch(filterProductsThunk(filterValue.searchInputProduct || ''));
  }, [filterValue.searchInputProduct]);

  const visibleProducts = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const openModal = product => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    console.log(visibleProducts)
  };

  const loadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + increment);
  };

  return (
    <>
      {isLoading && <h1 style={{ color: 'yellow' }}>Loading...</h1>}
      {Array.isArray(visibleProducts) && (
        <InfiniteScroll
          dataLength={itemsToShow}
          next={loadMore}
          hasMore={itemsToShow < visibleProducts.length}
          scrollableTarget="productList"
        >
          <ProductList id="productList">
            {visibleProducts.slice(0, itemsToShow).map(product => (
              <ProductItem key={product._id}>
                <Product
                  product={product}
                  openModal={() => openModal(product)}
                />
              </ProductItem>
            ))}
          </ProductList>
        </InfiniteScroll>
      )}
      {error && (
        <ErrorMessege>
          <StartError>Sorry, no results were found</StartError> for the product
          filters you selected. You may want to consider other search options to
          find the product you want. Our range is wide and you have the
          opportunity to find more options that suit your needs.
          <BottomError>
            Try refreshing the page or check your internet connection.
          </BottomError>
        </ErrorMessege>
      )}

      {isModalOpen && (
        <BasicModalWindow active={isModalOpen} setActive={setIsModalOpen}>
          {selectedProduct && (
            <AddProductForm
              productCalc={{
                foodName: selectedProduct.title,
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
