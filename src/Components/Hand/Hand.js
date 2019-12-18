import React from 'react';
import './Hand.css';
import Card from './Card/Card';

export default class Hand extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="Hand">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        )
    }
}