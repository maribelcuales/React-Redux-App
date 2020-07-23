import axios from 'axios'; 

export const FETCH_FILM_FAILIURE =  'FETCH_FILM_FAILIURE';

export const fetchFilm = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_FILM_START' }); 
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(res => {
        console.log(res); // response.data
        dispatch({ type: 'FETCH_FILM_SUCCESS', payload: res.data })
      })
      .catch(error => {
        console.log("get error", error); 
        dispatch({
          type: 'FETCH_FILM_FAILURE',
          payload: `${error}`
          // payload: `Error ${error.response.status}: ${error.response.data}`
        });
      });
  };
}; 

