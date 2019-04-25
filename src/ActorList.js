import React from 'react';
import propTypes from 'prop-types';

function ActorList(props) {
    return (
        <ul>
            {
                props.actors.map((actor, i) => <li key={i}>{actor}</li>)
            }
        </ul>
    )
}

ActorList.propTypes = {
    actors: propTypes.array.isRequired
}

export default ActorList;