import React from "react";
import { Typography, makeStyles, Paper, Container } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { COLORS } from "../Styles/colors";

const Doctor = () => {
const classes = useStyles();
    return (
        <div>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={5}>
                    <Typography className={classes.typo1}>Doctor's UI</Typography>
                        <InputBase
                            className={classes.input}
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search patient"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                </Paper> 
            </Container>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({

    typo1: {
        fontSize: "20px",
        fontWeight: "bold"
    },

    paper: {
        marginTop: "100px",
        marginLeft: "50px",
        marginRight: "50px",
        textAlign: "center",
        backgroundColor: COLORS.GREY,
    },

    container: {
        marginBottom: "100px",
    },

    input: {
        backgroundColor: COLORS.WHITE,
        marginBottom: "200px"
    },

}))
export default Doctor;