const initialState = { currentDate: new Date().toUTCString() };

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
