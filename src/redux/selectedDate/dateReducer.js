const initialState = { currentDate: new Date().toUTCString() }; // Convert Date to ISO string format
// const initialState = { currentDate: null }; // Convert Date to ISO string format

// export const setSelectedDate = date => ({
//   type: 'date/changeDate',
//   payload: date.toISOString(), // Convert Date to ISO string format
// });

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'date/changeDate':
      return { ...state, currentDate: action.payload };
    default:
      // return { ...state, currentDate: new Date().toUTCString() };
      return { ...state };
  }
};

export default dateReducer;
