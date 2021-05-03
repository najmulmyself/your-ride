import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import fakeData from '../../fakeData.json'
import './Main.css'
const Main = () => {
    const [ride,setRide] = useState([]);
    useEffect(() =>{
        setRide(fakeData)
    },[])
    return (
        <div className="card-row">
            {
                ride.map(eachRide => <Card eachRide={eachRide}></Card>)
            }
        </div>
    );
};

export default Main;