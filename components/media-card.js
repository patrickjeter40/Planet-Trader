import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


export default function MediaCard({ exoplanet, page }) {
  
  return (
    <Card sx={{ maxWidth: 500 }}>
      <Link href={page}>
        <CardMedia sx={{ height: 140 }} 
          image="https://drive.google.com/uc?id=1UTmqzmlYJYMFoa4F-QAWPFFiAhdqe1dN" 
          title="" 
          
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {exoplanet.PLANET}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {exoplanet.Archetype}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Fav</Button>
        <Button size="small" href={page}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
