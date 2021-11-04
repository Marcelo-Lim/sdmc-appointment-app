import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const Doctor = () => {
const classes = useStyles();
    return (
        <div>
            <Typography className={classes.typo1}>Doctor's UI</Typography>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({

    typo1: {
        fontSize: "10px",
    },

}))
export default Doctor;