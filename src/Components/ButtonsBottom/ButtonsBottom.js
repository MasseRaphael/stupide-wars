import React from 'react';
import './ButtonsBottom.css';
import LastCardButton from "./LastCardButton/LastCardButton";
import ScoreButton from "./ScoreButton/ScoreButton";

export default class ButtonsBottom extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="BottomButton">
                <LastCardButton/>
                <ScoreButton/>
            </div>
        )
    }
}