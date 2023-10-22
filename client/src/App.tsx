import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './components/Main/Main';
import './css/master.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
