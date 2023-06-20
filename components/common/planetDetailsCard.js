import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


export default function PlanetDetailsCard( {exoplanet} ) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ff776',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontSize: '24px',
  }));

  return (
    
    <Box sx={{ width: '100%', flexBasis:'50%' }}>
      <Stack spacing={6}>
        <Item><strong>Orbit: </strong>This exoplanet has an orbital period of {Math.round(exoplanet.pl_orbper)} Earth days</Item>
        <Item><strong>Mass: </strong>It has a mass that is {Math.round(exoplanet.pl_bmasse)} times our Earth</Item>
        <Item><strong>Distance: </strong>It is {Math.round(exoplanet.sy_dist * 3.26156)} lightyears away.</Item>
      </Stack>
    </Box>
    
  );
}