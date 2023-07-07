import React from 'react';
const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <video width="320" height="240" controls>
            <source src={movie.preview} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
};


export default MovieList;



