import Header from '../components/Header';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function dashboard({ exoplanets }) {
  if (!exoplanets) {
    return <p>Unable to fetch data...</p>;
  }
  return (
    <div class="main">
      <Header />
      <Box sx={{ flexGrow: 1 }} className="grid-mt">
      <Grid container spacing={2}>
        {exoplanets.map((exoplanet) => (
          <Grid item xs={4} key={exoplanet.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://i.imgur.com/o705iVb.png"
                title=""
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {exoplanet.PLANET}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={exoplanet.Archetype.replace(" ", "")}>
                {exoplanet.Archetype}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Fav</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch the data from the endpoint using fetch
    const res = await fetch('http://localhost:3000/api/getplanets');
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

