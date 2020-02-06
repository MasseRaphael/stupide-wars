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
                <p className="upLeft">{this.props.value}</p>
                <p className="upRight">{this.props.value}</p>
                <img src={cartePoint}></img>
                <p className="botLeft">{this.props.value}</p>
                <p className="botRight">{this.props.value}</p>
            </div>
        )
    }
}