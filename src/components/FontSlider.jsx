import React, { useState } from 'react';
import {Grid, Slider, Typography} from '@mui/material';

export default function FontSlider(props) {

  return (
    <Grid item sx={{ width: 200 }}>
        <Typography>Font size</Typography>
        <Slider onChange={event => props.onUpdate(event.target.value)} value={props.value} valueLabelDisplay="auto"
        step={1} marks min={8} max={25} />
    </Grid>
  );
}