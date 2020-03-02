import React from 'react';
import './SearchBox.css';


function SearchBox() {
    return (
        <div className="searchBox"> 
            <label htmlFor="searchField">Search: </label>
            <input 
                id="searchField" 
                name="searchText"
                type="text" 
                placeholder="Cats, dogs, airplanes..."
            />   
            <button>Search</button>  
        </div>
    );
}

export default SearchBox;
