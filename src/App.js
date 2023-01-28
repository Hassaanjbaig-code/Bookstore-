import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import './App.css';
import BooksContainer from './Component/BooksContainer';
import Categories from './Pages/Categories';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = {};
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    );
  }
}

export default App;
