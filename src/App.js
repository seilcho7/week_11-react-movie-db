import React from 'react';
import './App.css';
import movies from './movies';

import GenreList from './GenreList';
import MovieList from './MovieList';
import ActorList from './ActorList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: ''
    }
  }

  render() {
    // console.log(Object.keys(movies));
    return (
      <div className="App App-header">
        <GenreList genres={Object.keys(movies)} handleClick={this._setGenre} />
        {
          this.state.genre ? <MovieList movies={Object.keys(movies[this.state.genre])} /> : null
        }
        
        <ActorList actors={movies.documentaries.robocop} />
      </div>
    );
  }
  // Helper functions should be defined in the same class where the state is
  _setGenre = (genre) => {
    console.log(`You clicked ${genre}`)
    // Instead of accepting the event object, just accept the smallest piece of information needed to set state
    this.setState({
      // genre: genre
      // When the key and values are the same word, you can omit the ": genre"
      genre
    });
  }
}


export default App;