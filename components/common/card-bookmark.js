import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';

export default function CardBookmark({ exoplanet }) {

 
  
  return (
    <CardActions>
    <Button size="small">Save</Button>
    <Button size="small" href={`/details?id=${exoplanet._id}`} onClick={() => setSelectedExoplanetId(exoplanet._id)}>
      Learn More
    </Button>
  </CardActions>
    );
  }
  

 