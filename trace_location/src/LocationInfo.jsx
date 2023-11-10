import React,{useEffect, useState} from 'react';
import { Typography } from '@mui/material';



const LocationInfo=({ location })=>{
  const[country,setCountry]=useState("");
  useEffect(()=>{
    if(location.country!==null){
      setCountry(location.country);
    }
  },[])

  return (
  <div>
    <Typography style={{ padding: '20px', marginTop: '5px', fontSize: "2rem" }} variant="h6">Location Details</Typography>
    <Typography style={{ fontSize: "1.5rem" }} variant="body1">Country: {country}</Typography>
    <Typography style={{ fontSize: "1.5rem" }} variant="body1">State: {location.places[0].state}</Typography>


    {location.places.map((place, index) => (
      <Typography style={{ fontSize: "2rem" }} key={index}>
        <strong>Place Name: {place['place name']}</strong>
        {/* <p>Other Property: {place.otherProperty}</p> */}
      </Typography>
    ))}

  </div>
)
    }
export default LocationInfo;
