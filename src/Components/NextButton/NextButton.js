import React from 'react';
import './NextButton.css'

export default class NextButton extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="NextButton">
                <button>Joueur<br/>Suivant</button>
            </div>
        )
    }
}