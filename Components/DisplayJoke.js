// import React from 'react'

// export default function DisplayJoke({joke}) {
//     console.log((joke))

//     function setValue(){
//         if(JSON.stringify(joke) != '{}'){
//            return ((joke.type)=='single')?(joke.joke):(`setup : ${joke.setup}\n\nDelivery : ${joke.delivery}`)
//         }
//     }
//   return (
//     <textarea className='joke-dis' placeholder='Joke is LOADING...' value={setValue()} readOnly></textarea>
//   )
// }

import React from 'react';

export default function DisplayJoke({ joke }) {
    // Determine the content to display
    const jokeContent = Object.keys(joke).length > 0 
        ? joke.type === 'single'
            ? joke.joke
            : `Setup: ${joke.setup}\n\nDelivery: ${joke.delivery}`
        : ''; // Empty content if joke is empty

    return (
        <textarea
            className="joke-dis"
            placeholder={jokeContent ? '' : 'Joke is LOADING...'}
            value={jokeContent}
            readOnly
        />
    );
}
