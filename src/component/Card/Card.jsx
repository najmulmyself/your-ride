import React from 'react';
import { useHistory } from 'react-router';
import Destination from '../Destination/Destination';
import './Card.css'

const Card = ({eachRide}) => {
    const {img,name} = eachRide;
    const history = useHistory();
    const handleCard = () => {
        history.push('/destination')
    }
    return (
        <div onClick={handleCard} className='card-design'>
            <img src={img} style={{height:'80px'}} alt="" srcset=""/>
            <h3>{name}</h3>
        </div>
    );
};

export default Card;