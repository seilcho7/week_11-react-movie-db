import React from 'react';
import './App.css';
import movies from './movies';

import GenreList from './GenreList';
import MovieList from './MovieList';

function App() {
  // console.log(Object.keys(movies));
  return (
    <div className="App">
      <GenreList genres={Object.keys(movies)} />
      <MovieList movies={Object.keys(movies.documentaries)} />
    </div>
  );
}

export default App;