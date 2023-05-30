import * as React from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SelectDrop from '../common/selectDrop';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import DiscreteSliderMarks from '../common/DiscreteSliderMarks';

export default function SearchBar({ textSV }) {
  const router = useRouter();
  const [searchValue, setSearchValue] = React.useState(textSV || '');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      search();
    }
  };

  const handleSearchClick = () => {
    search();
  };

  const search = () => {
    router.push(`/pt/searchResults?query=${encodeURIComponent(searchValue)}`);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Search for an Exoplanet</h2>
      
        <div className='d-flex align-i-center justify-between mw-85'>
          <SelectDrop />
          <DiscreteSliderMarks />
          <TextField
            id="outlined-basic"
            label="Planet Name"
            variant="outlined"
            value={searchValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <Button variant="contained" id="search-button" onClick={handleSearchClick}>
            Search
          </Button>
        </div>
        
    </Box>
  );
}
