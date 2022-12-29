import React, { useState } from 'react';
import './App.css';
import Luckysheet from './component/Luckysheet'

function App() {
  //const luckysheet = window.luckysheet;
  //console.log(luckysheet.getCellValue(0, 0))
  const luckysheet = window.luckysheet;

  return (
    <div className="App">
      <header className="App-header">
        <Luckysheet />

      </header>
    </div>
  );
}

export default App;
