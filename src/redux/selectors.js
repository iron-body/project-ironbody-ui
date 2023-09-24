// export const getContacts = state => state.contacts.items;
export const getExercises = state => state.exercises.items;

export const getExerciseFiltered = state => state.exercises.filtered;

export const getLoading = state => state.exercises.isLoading;

export const getError = state => state.exercises.error;

export const getFilterValue = state => state.filter.value;
export const getIsLoading = state => state.auth.isLoading;