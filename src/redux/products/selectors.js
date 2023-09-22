// import { createSelector } from '@reduxjs/toolkit';

export const getProducts = state => state.products.items;

// export const getFilterValue = state => state.filter.value;

// export const selectVisibleProducts = createSelector(
//   [getProducts, getFilterValue],
//   (products, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return products.filter(product =>
//       product.title.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );
