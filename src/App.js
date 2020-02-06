import React from 'react';
import './App.css';
import PointsCard from './Components/PointCard/PointsCard';
import Hand from './Components/Hand/Hand';
import NextButton from './Components/NextButton/NextButton';
import ButtonsBottom from './Components/ButtonsBottom/ButtonsBottom';
import Card from './Components/Card/Card';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentPlayer: 0,
      player1:[],
      player2:[],
      player3:[],
    }
  }

  startGame = () => {
    // génération main joueur 1
    let _player1 = [{value: 1}, {value: 2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15},{color : '#16ad06'}]
    // génération main joueur 2
    let _player2 = [{value: 1}, {value: 2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15},{color : '#ddb118'}]
    // génération main joueur 3
    let _player3 = [{value: 1}, {value: 2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15},{color : '#18b6dd'}]

    this.setState({

      player1: _player1,

      player2: _player2,

      player3: _player3,

      currentPlayer: 1
    })
  }
  render(){

    let cards = [
      {value : this.state.player1.values},
    ]

    if(this.state.currentPlayer === 0){
      return (
        <div className="App">
    
          <div className="layout">
          
            <header>
    
              <h1>Stupide<br/>
                Wars</h1>
    
            </header>
    
            <button onClick={this.startGame}className="start">Commencer la partie</button>
    
          </div>
    
        </div>
      );

    }else{
      return (
        <div className="App">
    
          <div className="layout">
          
            <header>
    
              <h1>Stupide<br/>
                Wars</h1>
    
            </header>
    
            <PointsCard/>
    
            
            <div className="Hand">
                
                {
            this.state.player1.map((card) => {
              return <Card value={card.value}/>
            })
          }
                
            </div>
    
            <NextButton/>
    
            <ButtonsBottom/>
    
          </div>
    
        </div>
      );  
    }
  }
  
}

