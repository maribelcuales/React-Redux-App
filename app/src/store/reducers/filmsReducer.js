const initialState = {
  films: [],
  isFetching: false,
  error: ""
}; 

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FILM_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_FILM_SUCCESS":
      return {
        ...state,
        isFetching: false,
        films: action.payload,
        error: ""
      }; 
    default: 
      return state;
  }
};
