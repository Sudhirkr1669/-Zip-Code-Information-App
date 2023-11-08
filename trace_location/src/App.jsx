
import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import LocationInfo from './LocationInfo'; // Import LocationInfo component
import Error from './Error'; // Import Error component

function App() {
  const [pincode, setPincode] = useState('');
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pincode) {
      axios
        .get(`https://api.zippopotam.us/in/${pincode}`)
        .then((response) => {
          setLocation(response.data);
          console.log(location);
          setError(null);
        })
        .catch((err) => {
          setLocation(null);
          setError('Error fetching location data. Please check the pin code.');
        });
    }
  }, [pincode]);

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography style={{ padding: '20px', marginBelow: '20px'}} variant="h5">Your Location</Typography>
        <TextField
          label="Enter Pin Code"
          variant="outlined"
          value={pincode}
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
        {location && <LocationInfo location={location} />}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setLocation("")}
          style={{ marginTop: '10px',marginLeft:"10px" }}
        >
        Clear Data
  </Button>
      </Paper>
    </Container>
  );
}

export default App;

