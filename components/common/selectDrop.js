import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { useState } from 'react';

export default function BasicSelect() {
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <InputLabel id="">Type</InputLabel>
        <Select
          labelId=""
          id=""
          value={type}
          label="Type"
          onChange={handleChange}
          
        >
          <MenuItem className='' value="" ></MenuItem>
          <MenuItem value="Gas Giant">Gas Giant</MenuItem>
          <MenuItem value="Neptune-like">Neptune-like</MenuItem>
          <MenuItem value="Super-Earth">Super-Earth</MenuItem>
          <MenuItem value="Terrestrial">Terrestrial</MenuItem>
        </Select>
        </FormControl>
    </Box>
    
  );
}