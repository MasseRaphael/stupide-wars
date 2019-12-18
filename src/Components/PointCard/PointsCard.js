import React from 'react';
import './PointsCard.css';
import cartePoint from './exempleCartePoint.png';

export default class PointsCard extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="PointsCard">
                <p>+10</p>
                <p>+10</p>
                <img src={cartePoint}></img>
                <p>+10</p>
                <p>+10</p>
            </div>
        )
    }
}