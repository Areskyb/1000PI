import React from 'react';
import NavBar from './shared/NavBar/NavBar'
import './App.css';
import GameConatainer from './containers/GameContainer';
import { Router } from 'react-router-dom';

function App() {
  return (
    <>
   <NavBar></NavBar>
   <GameConatainer></GameConatainer>
   </>
  );
}

export default App;
