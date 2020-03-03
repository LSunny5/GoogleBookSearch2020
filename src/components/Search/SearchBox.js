import React from 'react';
import './SearchBox.css';


class SearchBox extends React.Component {
    state = {
        searchText: '',
    };

    
    
    render() {
        console.log(this.state.searchText);
        return (
            <div className="searchBox"> 
                <label htmlFor="searchField">Search: </label>
                <input 
                    id="searchText" 
                    name="searchText"
                    type="text" 
                    placeholder="Cats, dogs, airplanes..."
                    value={this.state.searchText}
                    required
                    onChange={this.handleChange}
                />   
                <button id="searchButton">Search</button>  
            </div>
        );
    }
}

export default SearchBox;
