import React from "react";
import {TextField, Typography, Grid} from "@mui/material";
import '../css/components.css';

export default function Input (props){
    
    return (
    <Grid item>
        <Typography style={{textTransform: 'capitalize'}} variant="body1" >{props.label}</Typography>
        <TextField name={props.label} variant="outlined" onChange={event=>props.onUpdate(event.target.value)} 
            value={props.value} type="text" placeholder={props.example} />
    </Grid>
    );
};