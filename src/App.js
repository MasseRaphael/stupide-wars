import React from 'react';
import './App.css';
import PointsCard from './Components/PointCard/PointsCard';
import NextButton from './Components/NextButton/NextButton';
import LastCardButton from './Components/LastCardButton/LastCardButton';
import ScoreButton from './Components/ScoreButton/ScoreButton';
import Card from './Components/Card/Card';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentPlayer: 0,
      player1:{},
      player2:{},
      player3:{},
      bonusMalusCards:[-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10],
      points: {},
      scoreP1: 0,
      scoreP2: 0,
      scoreP3: 0,
      tabCardPlayed: [],
    };

    this.handleClick =this.handleClick.bind(this);
  }

  handleClick(e){
    alert(e.target.value)
  }

  startGame = () => {
    // génération main joueur 1
    let _player1 = {card:[{value: 1}, {value: 2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15}],background : '#16ad06'}
    // génération main joueur 2
    let _player2 = {card:[{value:1}, {value: 2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15}],background : '#ddb118'}
    // génération main joueur 3
    let _player3 = {card:[{value:1}, {value:2}, {value: 3},{value : 4},{value : 5},{value : 6},{value : 7},{value : 8},{value : 9},{value : 10},{value : 11},{value : 12},{value : 13},{value : 14},{value : 15}],background : '#18b6dd'}

    this.printPointCard();

    this.setState({

      player1: _player1,

      player2: _player2,

      player3: _player3,

      currentPlayer: 1
    });
  }

  printPointCard = () => {

    let cardPoint = this.state.bonusMalusCards[Math.floor(Math.random() * this.state.bonusMalusCards.length)];
    console.log("cardPoint",cardPoint);
    let _points = {values: cardPoint};
    this.setState({
      points: _points
    });
    console.log(this.state.points);
  }

  next = () => {
    //changer de joueur
    let nextPlayer;
    

    while(this.state.tabCardPlayed.length !== this.state.currentPlayer ){
      alert('Veuillez Choisir une Carte!');
      return;
    }

    if(this.state.currentPlayer === 3){
      nextPlayer = 1;

  } else {
    

    nextPlayer = this.state.currentPlayer + 1;
    
  }

    this.setState({currentPlayer: nextPlayer});
//console.log(nextPlayer);
  }

  scorePanel = () => {

    alert('le score du joueur 1 est de ' + this.state.scoreP1 + ', le score du joueur 2 est de ' + this.state.scoreP2 + ', le score du joueur 3 est de ' + this.state.scoreP3)
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
    
            <PointsCard value={this.state.points.values}/>
    
            
            <div className="Hand">
                
                {
            player.map((card) => {
              return <Card value={card.value} style={backgroundColor} onClick={this.handleClick}/>
            })
          }
                
            </div>
    
            <NextButton onClick={this.next}/>
    
            <div className="BottomButton">
                <LastCardButton/>
                <ScoreButton onClick={this.scorePanel}/>
            </div>
    
          </div>
    
        </div>
      );  
    }
  }
  
}

