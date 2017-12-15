import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesAdd from './CountriesAdd';
import CountriesList from './CountriesList';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>Countries</h1>
      	<CountriesAdd />
       	<CountriesList />
      </div>
    );
  }
}

export default App;
