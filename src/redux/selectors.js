// export const getContacts = state => state.contacts.items;

export const getFilterValue = state => {
  return state.filter.value;
};

export const getCategoryValue = state => {
  return state.filter.selectedCategory;
};
