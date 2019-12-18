import React from 'react';
import './LastCardButton.css';

export default class LastCardButton extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="LastCardButton">
                <button>Dernière Cartes<br/>Jouées</button>
            </div>
        )
    }
}