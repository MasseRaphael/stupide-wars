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
      points:{value: 0},
      score: [0, 0, 0],
      tabCardPlayed: [],
      valeurActuel: 0,
      theWinner: 0
    };
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

      currentPlayer: 1,

    });
  }

  printPointCard = () => {

    let cardPoint = this.state.bonusMalusCards[Math.floor(Math.random() * this.state.bonusMalusCards.length)];
    console.log("cardPoint: ",cardPoint);
    let _points = {value: cardPoint};
    console.log("_points: " + _points.value)
    this.setState({

      points: _points,

    });
    console.log("points: " + this.state.points.value);
  }

  next = () => {
    //changer de joueur
    let nextPlayer;
    
    
    while(this.state.tabCardPlayed.length !== this.state.currentPlayer ){
      alert('Veuillez Choisir une Carte!');
      return;
    };

    if(this.state.currentPlayer === 3){
      nextPlayer = 1;
      this.winner();
      //this.deleteBonusMalus();
      this.printPointCard();
      //console.log(this.state.bonusMalusCards)
  } else {
    

    nextPlayer = this.state.currentPlayer + 1;
    
  }

    this.setState({currentPlayer: nextPlayer});

  }

  scorePanel = () => {

    alert('le score du joueur 1 est de ' + this.state.score[0] + ', le score du joueur 2 est de ' + this.state.score[1] + ', le score du joueur 3 est de ' + this.state.score[2])
  }

  playCard = (card) =>{

    this.setState({tabCardPlayed: this.state.tabCardPlayed.concat(card.value)}, () => console.log(this.state.tabCardPlayed));
    //this.deleteCards()

    console.log(card.value)
    console.log(this.state.tabCardPlayed)
    
  }

  nbElement = (array, value) =>{
    let counter = 0;
    for(let i=0;i<array.length;i++) {
      if (parseInt(array[i]) === parseInt(value)) {counter++;}
    }
    //console.log('counter' + counter)
    return counter;
  }
  

  winner = () =>{

    for(let i=0; i< this.state.tabCardPlayed.length; i++){
      let n = this.state.tabCardPlayed[i];
      let nb = this.nbElement(this.state.tabCardPlayed, n);
      let newTab = []
      if(nb === 1){
        newTab = newTab.concat(n);
      }
      this.setState({tabCardPlayed: newTab})
      //console.log('nb' + nb)
      //console.log('newtab' + newTab)
    }
    console.log('bonjour' + this.state.tabCardPlayed)
    console.log('points ' + this.state.points.value)

    for(let i=0; i <this.state.tabCardPlayed.length; i++){
      let a = this.state.tabCardPlayed[i];
      if(this.state.points.value > 0){
        if(parseInt(a) >= parseInt(this.state.valeurActuel)){
          this.setState({valeurActuel: parseInt(a),
          theWinner: i})
        }
      }else{
        if(parseInt(a) <= parseInt(this.state.valeurActuel)){
          this.setState({valeurActuel: parseInt(a),
          theWinner: i})
        }
      }
    }
    console.log('je' + this.state.theWinner)

    if(this.state.tabCardPlayed.length === 0){
      alert('relancer un tour');
    }else{
      alert("Le joueur gagnant est " + this.state.theWinner + " > " + this.state.valeurActuel);
      let gagnant = this.state.theWinner;
      let newScore = [0, 0, 0];
      newScore[gagnant] = parseInt(newScore[gagnant]) + parseInt(this.state.points.value);
      this.setState({score: newScore});
      console.log('suis' + gagnant)
      console.log('perdu' + newScore)
      console.log('!' + this.state.score)
    }

  }

  deleteBonusMalus = () =>{
    let deckBM = this.state.bonusMalusCards;
    let newDeckBM = deckBM.filter(() => {
      return this.state.points.value !== this.state.bonusMalusCards
    });

    this.setState({bonusMalusCards: newDeckBM});
  }

  deleteCards = (cardNumber) =>{
    let strPlayer = "player" + this.state.currentPlayer;
    console.log("strPlayer: " + strPlayer);
    let _deck = this.state[strPlayer];
    console.log("_deck: " + _deck);

    let newDeck = _deck.filter((card) => {
      return card.value !== cardNumber;
    })
    console.log("newDeck: " + newDeck);

    this.setState({[strPlayer]: newDeck})

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
    
            <PointsCard value={this.state.points.value}/>
    
            
            <div className="Hand">
                
                {
            player.map((card) => {
              return <Card value={card.value} style={backgroundColor} onClick={() => {this.playCard(card)}}/>
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

