import React from 'react';
import { Typography } from '@mui/material';

const LocationInfo = ({ location }) => (
  <div>
    <Typography variant="h6">Location Details</Typography>
    <Typography variant="body1">Country: {location.country}</Typography>
    <Typography variant="body1">State: {location.places[0].state}</Typography>
    {/* <Typography variant="body1">City: {location.places[place name]}</Typography> */}
    {/* {location.places.map((place, index)=>{
        console.log(place);
        <Typography variant="body1">Place Name:{place['place name']}</Typography>
    })} */}
     
        {location.places.map((place, index) => (
          <Typography key={index}>
            <strong>Place Name: {place['place name']}</strong>
            {/* <p>Other Property: {place.otherProperty}</p> */}
          </Typography>
        ))}
      
  </div>
);

export default LocationInfo;
