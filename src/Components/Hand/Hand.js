import React from 'react';
import './Hand.css';
import Card from './Card/Card';

export default class Hand extends React.Component {
    constructor(){
        super();
    }

    render(){

        let cards = [
            {value : 1},
            {value : 2},
            {value : 3},
            {value : 4},
            {value : 5},
            {value : 6},
            {value : 7},
            {value : 8},
            {value : 9},
            {value : 10},
            {value : 11},
            {value : 12},
            {value : 13},
            {value : 14},
            {value : 15},
          ]

        return(
            <div className="Hand">
                
                {
            cards.map((card) => {
              return <Card value={card.value}/>
            })
          }
                
            </div>
        )
    }
}