import { Typography, makeStyles, TextField } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';

import React from "react";

const ContactUs = () => {
const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typo1}>Contact Us</Typography>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({

  typo1: {
    marginTop: "100px",
    fontSize: "30px",
  }

}))

export default ContactUs;