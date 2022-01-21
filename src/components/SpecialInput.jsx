import React from "react";
import {Grid, InputLabel, Select, MenuItem, FormControl} from "@mui/material";
import '../css/components.css';

export default function Input (props){
    
    return (
    <Grid item>
        { props.label==="image" &&
            <FormControl className="special-input">
                <InputLabel id="image-select-label">Image Style</InputLabel>
                <Select 
                    value={props.value} labelId="image-select-label"
                    label="Select Image" onChange={event => props.onUpdate(event.target.value)}>
                    <MenuItem value="primary_blue.png">Primary Blue</MenuItem>
                    <MenuItem value="primary_black.png">Primary Black</MenuItem>
                    <MenuItem value="primary_white.png">Primary White</MenuItem>
                    <MenuItem value="secondary_blue.png">Secondary Blue</MenuItem>
                    <MenuItem value="secondary_black.png">Secondary Black</MenuItem>
                    <MenuItem value="secondary_white.png">Secondary White</MenuItem>
                    <MenuItem value="horizontal_blue.png">Horizontal Blue</MenuItem>
                    <MenuItem value="horizontal_black.png">Horizontal Black</MenuItem>
                    <MenuItem value="horizontal_white.png">Horizontal White</MenuItem>
                    <MenuItem value="isns_blue.png">IS&S Blue</MenuItem>
                    <MenuItem value="isns_black.png">IS&S Black</MenuItem>
                    <MenuItem value="isns_white.png">IS&S White</MenuItem>
                    <MenuItem value="ribbon.png">Ribbon</MenuItem>
                    <MenuItem value="initials.png">BC Initials</MenuItem>
                </Select>
            </FormControl>
        }
        { props.label==="color" && 
            <FormControl className="special-input">
                <InputLabel id="color-select-label">Text Color</InputLabel>
                <Select value={props.value} labelId="color-select-label"
                    label="Text Color" onChange={event => props.onUpdate(event.target.value)}>
                    <MenuItem value="#005A8B">Berea Blue</MenuItem>
                    <MenuItem value="initial">Black/Default</MenuItem>
                    <MenuItem value="#BFDBEC">Berea Light Blue</MenuItem>
                </Select>
            </FormControl>
        }
    </Grid>
    )
};