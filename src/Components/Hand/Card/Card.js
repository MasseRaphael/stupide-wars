import React from 'react';
import './Card.css';
import Carte from './exempleCarteGrand.png';

export default class Card extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="Card">
                <p className="Nom">Stormtrooper</p>
                <img src={Carte}></img>
                <p className="Chiffre">5</p>
            </div>
        )
    }
}