import React from "react";
import {TextField, Typography} from "@material-ui/core";
export default function Input (props){
    function handleChange(event){
        props.onUpdate(event.target.value);
    };
    return (
    <div>
        <Typography style={{textTransform: 'capitalize'}} variant="body1" >{props.label}</Typography>
        <TextField name={props.label} variant="outlined" onChange={event=>handleChange(event)} 
        value={props.value} type="text" placeholder={props.example} />
    </div>
    );
};