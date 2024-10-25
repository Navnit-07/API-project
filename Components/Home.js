import React, { useState } from 'react';
import SelectMenu from './SelectMenu';
import Button from './Button';
import DisplayJoke from './DisplayJoke';

export default function Home() {
    const [joke, setJoke] = useState({});
    const [jokeType, setJokeType] = useState("Any");

    // To handle click on "find joke" button
    function clickHandler(){
        async function fetchData() {
            try {
                await fetch(`https://v2.jokeapi.dev/joke/${jokeType}`)
                    .then((res) =>
                        res.json()
                    )
                    .then(data => {
                        setJoke(data)
                    })
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()
    }

    return (
        <>
            <div className="container center">
                <div className="content center">
                    <div className='heading-container'>
                        <h1 className='heading'>Tell me a JOKE</h1>
                    </div>
                    <div className='body center'>
                        <SelectMenu setJokeType={setJokeType} />
                        <Button clickHandler={clickHandler} />
                        <DisplayJoke joke={joke} />
                    </div>
                </div>

            </div>
        </>
    )
}