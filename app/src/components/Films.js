import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'; 
import { Container, Row } from "reactstrap";

import { fetchFilm } from '../store/actions/filmActions'; 
import FilmCard from './FilmCard.js'; 
import './styles.css';

const Films = props => {
  useEffect(() => {
    props.fetchFilm();
  }, []);
  console.log("props", props.films)

  return (
    <div>
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
          <div className="filmCard-container">
            <FilmCard film={film}/>
          </div>
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