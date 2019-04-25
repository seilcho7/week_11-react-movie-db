import React from 'react';
import propTypes from 'prop-types';

function MovieList(props) {
    return (
        <ul>
            {
                props.movies.map((movie, i) => <li key={i}>{movie}</li>)
            }
        </ul>
    )
}

MovieList.propTypes = {
    movies: propTypes.array.isRequired
}

export default MovieList;