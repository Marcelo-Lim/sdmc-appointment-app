import Autocomplete from '@mui/material/Autocomplete';
import { Typography, makeStyles,TextField, Grid, Container, Checkbox, FormControlLabel, Button } from "@material-ui/core";

import React,{useState} from 'react'

const ConsultationType = ({ value, onChange, inputValue, onInputChange }) => (
    <Autocomplete
      value={value}
      onChange={onChange}
      inputValue={inputValue}
      onInputChange={onInputChange}
      id="controllable-states-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Type of Consultation" />}
    />
  );

const options = ['Check-up',
'Blood Test',
'Ultrasound',
'Complete Blood Count (CBC)',
'Urinalysis'];

export default ConsultationType;
