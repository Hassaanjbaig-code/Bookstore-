import React, { Component } from 'react';
import BooksContainer from './Component/BooksContainer';

class App extends Component {
    constructor(props){
        super(props);
        this.input = {}
    }
  render() {
    return (
      <>
      <BooksContainer />
      </>
    )
  }
}

export default App