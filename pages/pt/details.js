import Header from '../../components/layout/header';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from '../../components/common/media-card';
import clientPromise from "../../lib/mongodb";
import { ObjectId } from 'mongodb';

export default function details({ exoplanets }) {
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }
  return (
    <div class="main">
      <Header title="Details" />
      <Box sx={{ flexGrow: 1 }} className="grid-mt">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MediaCard exoplanet={exoplanets} page="/pt/dashboard" /> 
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db('PlanetTrader');
    
    const { id } = context.query;
    const exoplanets = await db.collection("exoplanets").findOne({ _id: ObjectId(id) });
            
    return {
      props: { exoplanets: JSON.parse(JSON.stringify(exoplanets)), id },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { exoplanets: null },
    };
  }
}