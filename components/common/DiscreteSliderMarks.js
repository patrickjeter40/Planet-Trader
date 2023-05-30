import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [

  {
    value: 1,
    label: '>100',
  },
  {
    value: 20,
    label: '600',
  },
  {
    value: 50,
    label: '1500',
  },
  {
    value: 70,
    label: '2100',
  },
  {
    value: 100,
    label: '<3000',
  },
  
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 300 }}>
      <h4 className='m-0'>Lightyears from Earth:</h4>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={5}
        valueLabelDisplay="off"
        marks={marks}
        
      />
    </Box>
  );
}