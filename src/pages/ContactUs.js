import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

const ContactUs = () => {
const classes = useStyles();
  return (
    <div>
      <div className="heading">
        <Typography className={classes.typo1}>Contact Us</Typography>
      </div>
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