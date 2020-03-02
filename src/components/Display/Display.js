import React from 'react';
import './Display.css';
import Book from './Book';

function Display() {
    return (
        <div className = "bookDisplay">
           {/*<p id="errorMessage">{this.state.error}</p> */} 
            <Book />
        </div>
    )
}



export default Display;