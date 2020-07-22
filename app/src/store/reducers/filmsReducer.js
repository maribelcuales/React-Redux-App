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
        films: [...state.films, action.payload],
        error: ""
      }; 
    case "FETCH_FILM_FAILURE": 
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default: 
      return state;
  }
};
