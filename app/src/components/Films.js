import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'; 

import { fetchFilm } from '../store/actions/filmActions'; 
import Film from './Film.js'; 

const Films = props => {
  useEffect(() => {
    props.fetchFilm();
  }, []);
  console.log("props", props.films)

  return (
    <div>
      <h2>Films</h2>
      {props.isFetching && (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        />
      )}
      {props.films.map(film => {
        console.log(film)
        return (
          <Film film={film}/>
        )}
      )}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("fetching state", state);
  return {
    films: state.filmsReducer.films,
    isFetching: state.filmsReducer.isFetching,
    error: state.filmsReducer.error
  }
}; 

export default connect(
  mapStateToProps,
  { fetchFilm }
)(Films); 