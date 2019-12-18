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
                <p className="upLeft">+10</p>
                <p className="upRight">+10</p>
                <img src={cartePoint}></img>
                <p className="botLeft">+10</p>
                <p className="botRight">+10</p>
            </div>
        )
    }
}