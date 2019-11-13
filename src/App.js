import React from "react";
import "./App.css";
import ApodGrid from './components/ApodGrid'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <ApodGrid />
    </div>
  );
}

export default App;
