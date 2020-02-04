import React from 'react';
import './App.css';
import PointsCard from './Components/PointCard/PointsCard';
import Hand from './Components/Hand/Hand';
import NextButton from './Components/NextButton/NextButton';
import ButtonsBottom from './Components/ButtonsBottom/ButtonsBottom';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      tabCarteJoueur: [],
    }
  }

  startGame = () => {
    // Remplir tabCarteJoueur
  }
  render(){
    return (
      <div className="App">
  
        <div className="layout">
        
          <header>
  
            <h1>Stupide<br/>
              Wars</h1>
  
          </header>
  
          <PointsCard/>
  
          <Hand/>
  
          <NextButton tabCarteJoueur={this.state.tabCarteJoueur}/>
  
          <ButtonsBottom/>
  
        </div>
  
      </div>
    );  
  }
  
}

