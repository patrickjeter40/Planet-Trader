import Header from '../components/header';
import Footer from '../components/footer';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function dashboard({ exoplanets }) {
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }
  return (
    <div class="main">
      <Header title="Dashboard" />
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }} className="grid-mt">
          <Typography>
           
            </Typography>
        </Box>
      </Container>
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
