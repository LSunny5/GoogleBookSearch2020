import React from 'react';
import './Book.css';

function Book() {
    return (
        <div className="book">
            <h1 className="bookTitle">Henry I</h1>
            <img className="bookImage" alt="bookalt"></img>
            <p className="bookAuthor"> Author: C. Warren Hollister</p>
            <p className="bookPrice">Price: $50.00</p>
            <br />
            <p className="bookDescripton">The resulting volume is one that will be welcomed by students and general readers alike.</p>
        </div>
    )
}

export default Book;