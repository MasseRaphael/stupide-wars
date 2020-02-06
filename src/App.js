import React from 'react';
import './App.css';
import PointsCard from './Components/PointCard/PointsCard';

import NextButton from './Components/NextButton/NextButton';
import ButtonsBottom from './Components/ButtonsBottom/ButtonsBottom';
import Card from './Components/Card/Card';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentPlayer: 0,
      player1:{},
      player2:{},
      player3:{},
      bonusMalusCards:[-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10]
    }
  }

  startGame = () => {
    // génération main joueur 1
    let _player1 = {card:[{value: 1}, {value: 2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15}],background : '#16ad06'}
    // génération main joueur 2
    let _player2 = {card:[{value:1}, {value: 2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15}],background : '#ddb118'}
    // génération main joueur 3
    let _player3 = {card:[{value:1}, {value:2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15}],background : '#18b6dd'}

    this.setState({

      player1: _player1,

      player2: _player2,

      player3: _player3,

      currentPlayer: 1
    });

    this.printPointCard();
  }

  printPointCard = () => {

    let cardPoint = this.state.bonusMalusCards[Math.floor(Math.random() * this.state.bonusMalusCards.length)];
    console.log(cardPoint);

  }

  next = () => {
    //changer de joueur
    let nextPlayer;

    if(this.state.currentPlayer === 3){
      nextPlayer = 1;

  } else {
    nextPlayer = this.state.currentPlayer + 1;
  }

    this.setState({currentPlayer: nextPlayer});
console.log(nextPlayer);
  }

  render(){

    if(this.state.currentPlayer === 0){
      return (
        <div className="App">
    
          <div className="layout">
          
            <header>
    
              <h1>Stupide<br/>
                Wars</h1>
    
            </header>
    
            <button onClick={this.startGame} className="start">Commencer la partie</button>
    
          </div>
    
        </div>
      );

    }else{
      let strPlayer = "player" + this.state.currentPlayer;
      let player = this.state[strPlayer].card;
      let backgroundColor = this.state[strPlayer].background;

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
            player.map((card) => {
              return <Card value={card.value} style={backgroundColor}/>
            })
          }
                
            </div>
    
            <NextButton onClick={this.next}/>
    
            <ButtonsBottom/>
    
          </div>
    
        </div>
      );  
    }
  }
  
}

