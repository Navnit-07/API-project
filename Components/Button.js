import React from 'react';

export default function Button({clickHandler}){
    return(
        <>
            <button className='button find-joke' onClick={clickHandler}>Find Joke</button>
        </>
    )
}