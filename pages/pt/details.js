import Header from '../../components/layout/header';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from '../../components/common/media-card';
import clientPromise from "../../lib/mongodb";
import { ObjectId } from 'mongodb';
import { Button } from '@mui/material';
import { Margin } from '@mui/icons-material';

export default function details({ exoplanets }) {
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }

  const handleVisitClick = () => {
    const visitExo = exoplanets.pl_name.replace(/ /g, "_");
    const url = `https://exoplanets.nasa.gov/eyes-on-exoplanets/#/planet/${visitExo}`;
    window.location.href = url;
  }

  return (
    <div class="main">
      <Header title="Details" />
      <div style={{marginTop: "5%"}}>
        <MediaCard 
          exoplanet={exoplanets} 
          page="/pt/dashboard" 
        /> 
      
        <Button 
          variant="contained" 
          id="search-button" 
          className='' 
          style={{marginTop:"4%", minWidth:"20%"}}
          onClick={handleVisitClick}
          >
            Visit this Planet
        </Button>
      </div>
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