import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import PhotoDisplay from "./components/photoDisplay/index"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhotoDisplay photos={[]}/>
      </div>
    );
  }
}

export default App;
