import React from 'react';
import propTypes from 'prop-types';

function MovieList(props) {
    return (
        <ul>
            {
                props.movies.map((movie, i) => {
                    return (
                        <li key={i}>
                            <a
                                href="#"
                                onClick={() => {
                                    props.handleClick(movie);
                                }}
                            >
                                {movie}
                            </a>
                        </li>
                )})
            }
        </ul>
    );
}

MovieList.propTypes = {
    movies: propTypes.array.isRequired
}

export default MovieList;