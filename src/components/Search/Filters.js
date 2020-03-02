import React from 'react';
import './Filters.css';

const printTypes = ['all', 'books', 'magazines'];
const bookTypes = ['ebooks', 'free-ebooks', 'paid-ebooks'];

class Filters extends React.Component {
    state = {
        printType: 'all',
        bookType: 'ebooks',
    }

    handleChange = e => {
        const {target: {name, value}} = e;
        this.setState({ [name]: value});
    }

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
            <div className="filters">
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
            </div>
        )
    }
}

export default Filters;