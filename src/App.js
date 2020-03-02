import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Display from './components/Display/Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchText: '',
      selected: null
    };
  }

  handleSearch = (e) => {
    this.setState( {searchText: e.target.value})
  } 

  componentDidMount() {
    fetch('')

  }

  render () {
    return (
      <main className='App'>
        <Header />
        <Search handleSearch={this.handleSearch} />
        <Display />
      </main>
    );
  }
}

export default App;
