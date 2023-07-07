import React, { useEffect, useState } from 'react';
import './App.css';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddToFavourites from '../components/AddToFavourites';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      <div className=''>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='flex gap-11'>
        <MovieList movies={movies} />
        <div className='row'>
          <MovieList movies={movies} favouriteComponent={AddToFavourites} />
        </div>
      </div>
    </>
  );
}

export default App;
