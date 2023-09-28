// export const getContacts = state => state.contacts.items;
export const getExercises = state => state.exercises.items;

export const getUser = state => state.auth.user;

export const getUserName = state => state.auth.user.name

export const getUserEmail = state => state.auth.user.email;

export const getExerciseFiltered = state => state.exercises.filtered;

export const getLoading = state => state.exercises.isLoading;
export const getIsLoading = state => state.auth.isLoading;

export const getError = state => state.exercises.error;

export const getFilterValue = state => {
  return state.filter.value;
};

export const getCategoryValue = state => {
  return state.filter.selectedCategory;
};

export const getRecommendedValue = state => {
  return state.filter.recommendedFilter;
};

