// import { createSelector } from '@reduxjs/toolkit';
// import { getFilterValue } from '../selectors';

export const getProducts = state => state.products.items;
export const getCategoriesProducts = state => state.products.categories;

// export const selectVisibleProducts = createSelector(
//   [getProducts, getFilterValue],
//   (products, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return products.filter(product =>
//       product.title.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );
