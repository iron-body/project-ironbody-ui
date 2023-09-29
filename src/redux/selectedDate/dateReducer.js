const initialState = new Date().toISOString(); // Convert Date to ISO string format

const SET_SELECTED_DATE = 'SET_SELECTED_DATE';

export const setSelectedDate = date => ({
  type: SET_SELECTED_DATE,
  payload: date.toISOString(), // Convert Date to ISO string format
});

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return action.payload;
    default:
      // Parse the ISO string back to a Date object when loading the state from storage
      return new Date(state);
  }
};

export default dateReducer;