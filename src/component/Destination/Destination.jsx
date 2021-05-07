import React from "react";
import { Container } from "react-bootstrap";
import './Destination.css'
import map from '../../images/Map.png'
import { useParams } from "react-router";
const Destination = () => {
  let {id} = useParams();
  console.log(id);
  const handlePick = (event) => {
    let text = event.target.value;
    console.log(event.target.name ,text);
  }
  const handleSearch = (event) => {

    event.preventDefault();
  }
  return (
    <Container className="destination-style">
      <div className='route-div'>
        <form>
          <h6>Pick From</h6>
          <input className='input' type="text" name="from" id="" onBlur={handlePick}/>
          <br/>
          <br/>   
          <h6>Pick To</h6>
          <input className='input' type="text" name="to" id="" onBlur={handlePick}/>
          <br/>
          <input onClick={handleSearch} className="btn-danger mt-3 w-100" type="submit" value="Search"/>
        </form>
      </div>
      <div>
        <img className='map px-5' src={map} alt="map"/>
      </div>
    </Container>
  );
};

export default Destination;
