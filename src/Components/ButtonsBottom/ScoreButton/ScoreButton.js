import React from 'react';
import './ScoreButton.css';

export default class ScoreButton extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="LastCardButton">
                <button>Score</button>
            </div>
        )
    }
}