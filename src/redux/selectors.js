// export const getContacts = state => state.contacts.items;
export const getExercises = state => state.exercises.items;

export const getExerciseFiltered = state => state.exercises.filtered;

export const getIsLoading = state => state.auth.isLoading;

export const getError = state => state.exercises.error;

export const getFilterValue = state => {
  return state.filter.value;
};

export const getCategoryValue = state => {
  return state.filter.selectedCategory;
};

export const getLoading = state => state.exercises.isLoading;
