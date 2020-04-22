import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calculadora } from './componentes/calculadora';
import { Test } from './componentes/prueba';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calculadora></Calculadora>
        <Test></Test>
      </header>
    </div>
  );
}

export default App;
