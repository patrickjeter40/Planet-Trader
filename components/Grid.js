import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from './Card-media';


export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="grid-mt">
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <MediaCard />      
        </Grid>
        <Grid item xs={4}>
            <MediaCard />    
        </Grid>
        <Grid item xs={4}>
            <MediaCard />      
        </Grid>
        <Grid item xs={4}>
            <MediaCard />      
        </Grid>
      </Grid>
    </Box>
  );
}