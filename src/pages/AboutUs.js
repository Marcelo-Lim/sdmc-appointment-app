import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const AboutUs = () => {
const classes = useStyles();
  return (
    <div>
      <div className="heading">
        <Typography className={classes.typo1}>About Us</Typography>
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
export default AboutUs;