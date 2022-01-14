import React from 'react';
import {Button, Grid, Slider, Typography} from '@mui/material';

export default function SizeSlider(props) {

  return (
  <Grid item sx={{ width: 180 }}>
      <Typography style={{textTransform: 'capitalize'}} variant="body1" >{props.label} Size
        <Button sx={{ml:2, fontSize:11}} onClick={props.onReset}>Reset</Button> 
      </Typography>
        <Slider onChange={event=>props.onUpdate(event.target.value)} value={props.value} valueLabelDisplay="auto"
          step={props.step} marks min={props.min} max={props.max} />
  </Grid>
  );
};