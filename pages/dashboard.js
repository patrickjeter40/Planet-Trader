import Header from '../components/header';
import Footer from '../components/footer';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SimpleSlider from '../components/welcome-hero';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';



export default function dashboard({ exoplanets }) {
  
 
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }

  const [selectedExoplanetId, setSelectedExoplanetId] = useState(null);
  return (
    <div class="main">
      <Header title="Dashboard" />
      <Box sx={{ flexGrow: 1 }} className="grid-mt">
        <SimpleSlider />
        <Typography variant='h5'>
            <b>Trending Planets</b>
        </Typography>
        <Grid container spacing={2}>
          {exoplanets.map((exoplanet) => (
            <Grid item xs={4} key={exoplanet.id}>
              <Card sx={{ maxWidth: 500 }}>
              <Link href={`/details?id=${exoplanet._id}`} onClick={() => setSelectedExoplanetId(exoplanet._id)}>

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
                  <Button size="small" href='details'>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />      
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch the data from the endpoint using fetch
    const res = await fetch('http://localhost:3000/api/getplanets-home');
    const exoplanets = await res.json();

    // Return the data as props
    return {
      props: { exoplanets },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { exoplanets: [] },
    };
  }
}

