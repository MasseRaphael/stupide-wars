import React from 'react';
import './Card.css';
import Carte from './exempleCarteGrand.png';

export default class Card extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <button className="Card"style={{backgroundColor:this.props.style}} onClick={this.props.onClick}>
                <p className="Nom">Stormtrooper</p>
                <img src={Carte}></img>
                <p className="Chiffre">{this.props.value}</p>
            </button>
        )
    }
}