import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Destination.css";
import map from "../../images/Map.png";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
const Destination = () => {

  const { register, handleSubmit } = useForm();
  const [pickFrom, setPickFrom] = useState('');
  const [pickTo, setPickTo] = useState('');
  const [isSearch,setIsSearch] = useState(true);
  const onSubmit = data => {
    // setPickFrom(data.From = '')
    // setPickTo(data.To = '')
    // const {From , To }
    if(data.From && data.To){
      // console.log(isSearch)
      setPickFrom(data.From)
      setPickTo(data.To)
      setIsSearch(false)
    }
  };
  console.log(isSearch)
  let { id } = useParams();
  // console.log(id);
  // fdjlksdjfkjlksdfjljdfs

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
  // const isClicked = () => console.log('clicked')
  return (
    <Container className="destination-style">
      <div className="route-div">
        {isSearch ? <form onSubmit={handleSubmit(onSubmit)}>
          <h6>Pick From</h6>
          <input
            {...register("From")}
            required
            className="input"
            type="text"
            // name="From"
            id=""
            // onBlur={(e) => setPickFrom(e.target.value)}
          />
          <br />
          <br />
          <h6>Pick To</h6>
          <input
            {...register("To")}
            required
            className="input"
            type="text"
            // name="To"
            id=""
            // onBlur={(e) => setPickTo(e.target.value)}
          />
          <br />
          <input
            // onClick={handleSearch}
            className="btn-danger mt-3 w-100"
            type="submit"
            // isClicked
            value="Search"
          />
        </form> : <div> <p>{pickFrom}</p>
      <p>{pickTo}</p> </div> }
      </div>
      <div>
        <img className="map px-5" src={map} alt="map" />
      </div>
    </Container>
  );
};

export default Destination;
