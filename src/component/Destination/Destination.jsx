import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Destination.css";
import map from "../../images/Map.png";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
const Destination = () => {
  const { register, handleSubmit } = useForm();
  const [pickFrom, setPickFrom] = useState("");
  const [pickTo, setPickTo] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const onSubmit = (data) => {
    if (data.From && data.To) {
      setPickFrom(data.From);
      setPickTo(data.To);
      setIsSearch(false);
    }
  };
  let { id } = useParams();

  // const handlePick = (event) => {
  //   let text = event.target.value;
  //   console.log(text)
  //   event.target.name === 'From' ? setPickFrom(text) : setPickTo(text);
  //   // console.log(event.target.name, text);
  // };
  // const handleSearch = (event) => {
  //   event.target.reset();
  //   event.preventDefault();
  // };
  return (
    <Container className="destination-style">
      <div className="route-div">
        {isSearch ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h6>Pick From</h6>
            <input
              {...register("From")} // used this for specification || this returns an object which contains value of 'From'
              required
              className="input"
              type="text"
              // name="From"  // alternative added {...register("example")}
              id=""
              // onBlur={(e) => setPickFrom(e.target.value)}
            />
            <br />
            <br />
            <h6>Pick To</h6>
            <input
              {...register("To")} // used this for specification || this returns an object which contains value of 'To'
              required
              className="input"
              type="text"
              // name="To"
              id=""
              // onBlur={(e) => setPickTo(e.target.value)}
            />
            <br />
            <input
              className="btn-danger mt-5 w-100"
              type="submit"
              value="Search"
            />
          </form>
        ) : (
          <div className="pick-route">
            <p><FontAwesomeIcon icon={faCoffee} /> {pickFrom}</p>
            <p>{pickTo}</p>
            <div>
            <p>something</p>
            <p>something</p>
            <p>something</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <img className="map px-5" src={map} alt="map" />
      </div>
    </Container>
  );
};

export default Destination;
