import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from '../common/media-card';

export default function BasicGrid({ exoplanets }) {
  if (!exoplanets) {
    return <p>Loading...</p>;
  }
  return (
    <Box sx={{ flexGrow: 1 }} className="grid-mt">
      <Grid container spacing={2}>
        {exoplanets.map((exoplanet) => (
          <Grid item xs={4} key={exoplanet.id}>
            <MediaCard children={exoplanet} />      
          </Grid>
        ))}
      </Grid>
    </Box>
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

