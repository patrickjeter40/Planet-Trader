import Header from '../../components/layout/header';
import React, { useEffect, useState } from 'react';
import MediaCard from '../../components/common/media-card';
import clientPromise from "../../lib/mongodb";
import { ObjectId } from 'mongodb';
import { Button } from '@mui/material';
import Footer from '../../components/layout/footer';
import PlanetDetailsCard from '../../components/common/planetDetailsCard';

export default function details({ exoplanets }) {
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }

  const handleVisitClick = () => {
    const visitExo = exoplanets.pl_name.replace(/ /g, "_");
    const url = `https://exoplanets.nasa.gov/eyes-on-exoplanets/#/planet/${visitExo}`;
    window.open(url, "_blank");
  };

  return (
    <div className='main-parent'>
      <Header title="Details" />
        <div class="main">
          <div style={{marginTop: "5%"}}>
            <div class='d-flex justify-between'>
              <MediaCard 
                exoplanet={exoplanets} 
                page="/pt/dashboard"
                
              /> 
              <PlanetDetailsCard 
                exoplanet={exoplanets} 
              />
            </div>
            <Button 
              variant="contained" 
              id="search-button" 
              className='' 
              style={{marginTop:"4%", minWidth:"20%"}}
              onClick={handleVisitClick}
              fullWidth='true'
              color='success'
              >
                Visit this Planet
            </Button>
          </div>
        </div>
      <Footer />
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