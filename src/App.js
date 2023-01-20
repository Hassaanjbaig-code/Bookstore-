import React, { Component } from 'react';
import Header from './Component/Header'
import './App.css'
import BooksContainer from './Component/BooksContainer';
import Categories from './Pages/Categories';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.input = {}
    }
  render() {
    return (
      <>
      <Header />
      <Routes>
        <Route path='/' element={ <BooksContainer /> } />
        <Route path='/Categories' element={ <Categories /> } />
      </Routes>
      </>
    )
  }
}

export default App