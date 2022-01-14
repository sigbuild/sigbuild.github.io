import React from 'react';
import {Button, Grid, Slider, Typography} from '@mui/material';

export default function SizeSlider(props) {
  function handleChange(event){
    props.onSlide();
    props.onUpdate(event.target.value)
  };
  function handleReset(){
    props.onSlide();
    props.onReset();
  }
  return (
    <Grid item sx={{ width: 180 }}>
        <Typography style={{textTransform: 'capitalize'}} variant="body1" >{props.label} Size
          <Button sx={{ml:2, fontSize:11}} onClick={handleReset}>Reset</Button> 
        </Typography>
        { props.label=== "name" ?
        <Slider onChange={handleChange} value={props.value} valueLabelDisplay="auto"
        step={1} marks min={4} max={40} /> :null }
        { props.label=== "detail" ?
        <Slider onChange={handleChange} value={props.value} valueLabelDisplay="auto"
        step={1} marks min={1} max={25} /> :null }
        { props.label=== "image" ?
        <Slider onChange={handleChange} value={props.value} valueLabelDisplay="auto"
        step={25} marks min={35} max={335} /> :null }
        { props.label=== "line" ?
        <Slider onChange={handleChange} value={props.value} valueLabelDisplay="auto"
        step={0.1} marks min={0.1} max={3} /> :null }
    </Grid>
  );
}