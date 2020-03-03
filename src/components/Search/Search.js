import React from 'react';
import './Search.css';
import SearchBox from './SearchBox';
import Filters from './Filters';

const searchURL = 'https://www.googleapis.com/books/v1/volumes?';
const APIKey = 'AIzaSyCgoa5LezjjjY6hOUkXJUjC7h0lswQrwWs';

const printTypes = ['all', 'books', 'magazines'];
const bookTypes = ['ebooks', 'free-ebooks', 'paid-ebooks'];

class Search extends React.Component {
    state = {
        searchText: '',
        printType: 'all',
        bookType: 'ebooks',
    }

    handleChange = e => {
        const {
            target: { name, value }
        } = e;
        this.setState({ [name]: value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.fetchBooks();
    }

    fetchBooks = () => {
        const URL = `${searchURL}q=${this.state.searchText}&filter=${this.state.bookType}&printType=${this.state.printType}&langRestrict=en&orderBy=relevance&key=${APIKey}`;

        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something is wrong, please try again later.');
                }
                return response;
            })
            .then(response => response.json())
            .then(data => this.props.displayBooks(data))
            .catch(err => {
                this.setState({
                    error: err.message
                });
            })
    };


    render() {
        const printTypeOptions = printTypes.map((printTypeOption, index) => (
            <option
                value={printTypeOption}
                key={index}
            >
                {printTypeOption}
            </option>
        ));

        const bookTypeOptions = bookTypes.map((bookTypeOption, index) => (
            <option
                value={bookTypeOption}
                key={index}
            >
                {bookTypeOption}
            </option>
        ));

        return (
            <form
                id="searchForm"
                onSubmit={e => this.handleSubmit(e)}
            >

                <section className="searchBox">
                    <label htmlFor="searchText">Search: </label>
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
                </section>

                <section className="filters">
                    <label htmlFor="printType">Print Type: </label>
                    <select
                        id="printType"
                        name="printType"
                        value={this.state.printType}
                        onChange={this.handleChange}
                    >
                        {printTypeOptions}
                    </select>

                    <label htmlFor="bookType">Book Type: </label>
                    <select
                        id="bookType"
                        name="bookType"
                        value={this.state.bookType}
                        onChange={this.handleChange}
                    >
                        {bookTypeOptions}
                    </select>
                </section>
            </form>
        )
    }
}

export default Search;