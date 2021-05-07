import React from 'react';
import Destination from '../Destination/Destination';
import './Card.css'

const Card = ({eachRide}) => {
    const {img,name} = eachRide;
    return (
        <div className='card-design'>
            <img src={img} style={{height:'80px'}} alt="" srcset=""/>
            <h3>{name}</h3>
        </div>
    );
};

export default Card;