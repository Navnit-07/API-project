import react from 'react';

export default function SelectMenu({setJokeType}){
    const handleSelect = (e)=>{
        (e.target.value === "not-selected")?(setJokeType("Any")):(setJokeType(e.target.value));
    } 
    return(
        <select name="joke" className='joke-category' onChange = {handleSelect}>
            
                <option value="not-selected" hidden>Select Joke Category</option>
                <option value="Any">Any</option>
                <option value="Programming">Programming</option>
                <option value="Pun">Pun</option>
                <option value="Misc">Misc</option>
                <option value="Dark">Dark</option>
        </select>
    )
}