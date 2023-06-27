import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import IconStat from '../../components/common/icon-stat';
import CardBookmark from '../../components/common/card-bookmark';
import { getSession } from 'next-auth/react';

export default function Dashboard({ exoplanets }) {
  if (!exoplanets) {
    return <p>Unable to fetch data... Please contact support@exoplanets</p>;
  }

  const [selectedExoplanetId, setSelectedExoplanetId] = useState(null);

  return (
    <>
      <Header title="Dashboard" />
        <div class="main">
          <Box sx={{ flexGrow: 1 }} className="grid-mt">
            <Typography variant="h5">
              <b>My Saved Planets</b>
            </Typography>
            <Grid container spacing={2}>
              {exoplanets.map((exoplanet) => (
                <Grid item xs={4} key={exoplanet.id}>
                  <Card sx={{ maxWidth: 500 }}>
                    <Link href={`/pt/details?id=${exoplanet._id}`} onClick={() => setSelectedExoplanetId(exoplanet._id)}>
                      <CardMedia sx={{ height: 140 }} image="https://drive.google.com/uc?id=1UTmqzmlYJYMFoa4F-QAWPFFiAhdqe1dN" title="" />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <IconStat exoplanet={exoplanet} id="planet" svgurl="http://www.w3.org/2000/svg" alt="planet-icon" statpull="pl_rade" statcontent="x" />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {exoplanet.Archetype}
                      </Typography>
                    </CardContent>
                    <CardBookmark exoplanet={exoplanet} />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    // Get the user session email
    const session = await getSession(context);
    const userEmail = session.user.email;

    // Fetch the data from the endpoint using fetch with user email data
    const res = await fetch(`https://planet-trader.vercel.app/api/findUserBookmarks?userEmail=${userEmail}`);
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
