import React from 'react';
import './Search.css';
import SearchBox from './SearchBox';
import Filters from './Filters';

function Search(props) {
    console.log(props);
    return (
        <form className="search">
            <SearchBox />
            <Filters />
        </form>
    )
}

export default Search;