import React from 'react';
import './Search.css';


function Search() {
    return (
        <form>
            <label htmlFor="searchField">Search: </label>
            <input 
                id="searchField" 
                type="text" 
                autofocus
            />   
            <button>Search</button>   
        </form>
    )
}

export default Search;