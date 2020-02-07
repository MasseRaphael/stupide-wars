import React from 'react';
import './Card.css';
import Carte from './exempleCarteGrand.png';

export default class Card extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button className="Card" value={this.props.value} style={{backgroundColor:this.props.style}} onClick={this.props.onClick}>
                <p className="Nom">Stormtrooper</p>
                <img src={Carte}></img>
                <p className="Chiffre">{this.props.value}</p>
            </button>
        )
    }
}