import React from 'react';

function GenreList(props) {
    return (
        <ul>
            {/* Using the array index as the key for now, until we talk to a backend to get a real id */}
            {
                props.genres.map((genre, i) => {
                    // Using explicit return, so that we can have multiple statements
                    // console.log(genre);
                    return (
                        <li key={i}>
                            <a 
                                href="#"
                                onClick={() => {
                                    // When you need to pass something other than the event, you need an anonymous function
                                    props.handleClick(genre)
                                }}
                                // onClick={props.handleClick} // This sends the whole event to props.handleClick
                                // onClick={props.handleClick(genre)} // Don't DO THIS. This calls props.handleClick before you hand it to the browser
                            >{genre}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default GenreList;