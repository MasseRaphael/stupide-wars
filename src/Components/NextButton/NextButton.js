import React from 'react';
import './NextButton.css'

export default class NextButton extends React.Component {
    constructor(){
        super();
    }

    render(){
        let tabCarte = this.props.tabCarteJoueur;
        if(tabCarte.length === 0) {
            return(
                <div className="NextButton">
                    <button>Commencer partie</button>
                </div>
            )
        } else {
            return(
                <div className="NextButton">
                    <button>Joueur<br/>Suivant</button>
                </div>
            )
        }

    }
}