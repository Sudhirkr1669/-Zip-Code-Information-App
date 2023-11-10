
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import LocationInfo from './LocationInfo'; // Import LocationInfo component
import Error from './Error'; // Import Error component
// import {TailSpin} from 'react-loader-spinner';

import {Oval} from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  // const [pincode, setPincode] = useState('');
  const [postalCode, setPostalCode] = useState('');
  // const [isValidPostalCode, setIsValidPostalCode] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const[loading,setLoading]=useState(false);
  
  const handlePincodeChange = (e) => {
    e.preventDefault();
    // setPincode(e.target.value);
    const inputValue=e.target.value;
       setPostalCode(inputValue);
    // const postalCodeRegex = /^\d{6}$/;
    //  setIsValidPostalCode(postalCodeRegex.test(postalCode));
   

   
  };
  // useEffect(()=>{

  //   setPostalCode(inputValue);
  //   setIsValidPostalCode(isValid);
  //  },[])

  
   useEffect(()=>{
    if (postalCode) {
      axios
        .get(`https://api.zippopotam.us/in/${postalCode}`)
        .then((response) => {
          setLocation(response.data);
          console.log(location);
          setError(null);
          {response.data && setLoading(false)};
        })
        .catch((err) => {
          setLocation(null);
          setError('Error fetching location data. Please check the pin code.');
          setLoading(true)
        });
    }
   },[postalCode]) 

  
  const centeredStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
    marginTop:"10px"
  };
 
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography style={{ padding: '20px', marginBelow: '20px'}} variant="h5">Your Location</Typography>
        <TextField
          label="Enter Pin Code"
          variant="outlined"
          value={postalCode}
          onChange={handlePincodeChange}
        />
        {/* <Button
          variant="contained"
          color="primary"
          onClick={() => setPincode(pincode)}
          style={{ marginTop: '10px' }}
        >
          Search
        </Button> */}
        {error && <Error error={error} />}
        {loading ?(<div style={centeredStyle}> <Oval
          type="Oval" // Specify "Oval" for an oval loader
          color="#00BFFF" // Customize the loader color
          height={100} // Set the loader height
          width={100}
 // Set the loader width
        /></div>):(location && <LocationInfo location={location} />)}
        <Button
          variant="contained"
          color="primary"
          onClick={()=>setPostalCode("")}
          style={{ marginTop: '10px',marginLeft:"10px" }}
        >
        Clear Data
  </Button>
      </Paper>
    </Container>
  );
}

export default App;

