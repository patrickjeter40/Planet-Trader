import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import DiscreteSliderMarks from '../common/DiscreteSliderMarks';

export default function SearchBar({ textSV, orbitMaxSV, orbitMinSV }) {
  const router = useRouter();
  const [searchNameValue, setNameValue] = React.useState(textSV || '');
  const [searchOrbitMinValue, setOrbitMinValue] = React.useState(orbitMinSV || '');
  const [searchOrbitMaxValue, setOrbitMaxValue] = React.useState(orbitMaxSV || '');

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
    const query = encodeURIComponent(searchNameValue);
    const orbitMin = encodeURIComponent(searchOrbitMinValue);
    const orbitMax = encodeURIComponent(searchOrbitMaxValue);
    router.push(`/pt/searchResults?query=${query}&orbitMin=${orbitMin}&orbitMax=${orbitMax}`);
  };
  

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const handleOrbMinChange = (event) => {
    setOrbitMinValue(event.target.value);
  };
  const handleOrbMaxChange = (event) => {
    setOrbitMaxValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Search for an Exoplanet</h2>
      
      <div className='d-flex align-i-self-start justify-between'>
          <div className='mw-200'>
            <h4 className='m-0 mb-15'>Exoplanet Name</h4>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={searchNameValue}
              onChange={handleNameChange}
              onKeyPress={handleKeyPress}
              size='small'
            />
          </div>
          <div className='mw-200'>
            <h4 className='m-0 mb-15'>Orbital Period in Days:</h4>
            <div className='d-flex justify-between'>
              <TextField
                id="outlined-error-helper-text"
                label="Min"
                type= 'number'
                name='orbit-min'
                value={searchOrbitMinValue}
                onChange={handleOrbMinChange}
                onKeyPress={handleKeyPress}
                size='small'
              />
              <TextField
                id="outlined-error-helper-text"
                label="Max"
                type= 'number'
                name='orbit'
                value={searchOrbitMaxValue}
                onChange={handleOrbMaxChange}
                onKeyPress={handleKeyPress}
                size='small'
              />
            </div>
          </div>
          <DiscreteSliderMarks />
          <Button variant="contained" id="search-button" onClick={handleSearchClick} className='self-center fb-15'>
            Search
          </Button>
        </div>
        
    </Box>
  );
}
