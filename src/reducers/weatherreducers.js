const initialState = {
  zipcode: [],
  country: [],
  details: [],
};
const moviesreducers = (state = initialState, action) => {
  switch (action.type) {
    case "ZIP_CODE": {
      return { ...state, zipcode: action.payload };
    }
    case "ADD_FAVROUITE": {
      return {
        ...state,
        country: [...state.country, action.payload],
      };
    }
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        country: state.country.filter((item) => item !== action.payload),
      };
    case "DETAIL": {
      return {
        ...state,
        details: action.payload,
      };
    }

    default:
      return state;
  }
};
export default moviesreducers;
