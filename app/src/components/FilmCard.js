import React from 'react';

const FilmCard = ({ film }) => {
  // console.log("props", props); 
  return (
    <div>
      {film.map(item => {
        return(
          <div key={item.id}>
             <h3>Title: {item.title}</h3>     
             <p>Description: {item.description}</p>
             <p>Director: {item.director}</p>
             <p>Producer: {item.producer}</p>
             <p>Release Date: {item.release_date}</p>
           </div>
        )
      })}
    </div>
  );
};

export default FilmCard; 
