import React from 'react';

function GenreList(props) {
    return (
        <ul>
            {/* Using the array index as the key for now, until we talk to a backend to get a real id */}
            {
                props.genres.map((genre, i) => <li key={i}>{genre}</li>)
            }
        </ul>
    );
}

export default GenreList;