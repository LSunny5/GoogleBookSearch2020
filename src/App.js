import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Display from './components/Display/Display';

class App extends React.Component {
  state = {
    results: [],
  }
  
  displayBooks = data => {
		this.setState({
			results: [data]
		});
  }

  render () {
    return (
      <main className='App'>
        <Header />
        <Search displayBooks={data => this.displayBooks(data)} />
        <Display results={this.state.results} />
      </main>
    );
  }
}

export default App;
