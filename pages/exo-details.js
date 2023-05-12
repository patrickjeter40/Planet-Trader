import Header from '../components/Header';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from '../components/media-card';

export default function dashboard({ exoplanets }) {
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }
  return (
    <div class="main">
      <Header title="Details" />
      <Box sx={{ flexGrow: 1 }} className="grid-mt">
      <Grid container spacing={2}>
        {exoplanets.map((exoplanet) => (
          <Grid item xs={4} key={exoplanet.id}>
            <MediaCard exoplanet={exoplanet} page="/dashboard" />
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
    const res = await fetch('http://localhost:3000/api/getplanets-details');
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

