import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


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
      
      <div className='d-flex align-i-self-start gap-20'>
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

          <Button variant="contained" id="search-button" onClick={handleSearchClick} className='self-end fb-15 min-40'>
            Search
          </Button>
        </div>
        
    </Box>
  );
}
