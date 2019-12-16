import React from 'react';
import './App.css';
import PointsCard from './Components/PointsCard';
import Hand from './Components/Hand';
import NextButton from './Components/NextButton';
import ButtonsBottom from './Components/ButtonsBottom';

function App() {
  return (
    <div className="App">
      
      <header>

        <h1>Stupide<br/>
          Wars</h1>

      </header>

      <div><PointsCard/></div>

      <Hand/>

      <div><NextButton/></div>

      <ButtonsBottom/>

    </div>
  );
}

export default App;
