import React, { useEffect, useState } from "react";
import "./Home.css";
import fakeData from "../../fakeData.json";
import Card from "../Card/Card";

const Home = () => {
  const [ride, setRide] = useState([]);
  useEffect(() => {
    setRide(fakeData);
  }, []);
  return (
    <div className="background">
      <div className="card-row">
        {ride.map((eachRide) => (
          <Card eachRide={eachRide}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
