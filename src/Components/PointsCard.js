import React from 'react';
import './PointsCard.css'

export default class PointsCard extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="PointsCard">
                <p>+10</p>
                <p>+10</p>
                <p>+10</p>
                <p>+10</p>
            </div>
        )
    }
}