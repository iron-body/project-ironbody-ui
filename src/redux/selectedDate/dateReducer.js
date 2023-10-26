const initialState = { currentDate: new Date().toUTCString() }; // Convert Date to ISO string format
// const initialState = { currentDate: null }; // Convert Date to ISO string format

export const setSelectedDate = date => ({
  type: 'date/changeDate',
  payload: date.toISOString(), // Convert Date to ISO string format
});

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'date/changeDate':
      return { ...state, currentDate: action.payload };
    default:
      // Parse the ISO string back to a Date object when loading the state from storage
      // return { ...state, currentDate: Date.now() }; // Return the number of milliseconds from Unix time
      return { ...state, currentDate: new Date().toUTCString() };
  }
};

export default dateReducer;
