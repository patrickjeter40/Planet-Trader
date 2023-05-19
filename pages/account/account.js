import Header from '../../components/layout/header';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from '../components/media-card';
import { useState } from 'react';



export default function dashboard({ exoplanets }) {
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }
  return (
    <div class="main">
      <Header title="Account" />
      <Box sx={{ flexGrow: 1 }} className="grid-mt">
      </Box>
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

