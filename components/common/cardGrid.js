import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import IconStat from './icon-stat';
import CardBookmark from './card-bookmark';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';

export default function CardGrid({ exoplanets, gridCaption }) {
  const [selectedExoplanetId, setSelectedExoplanetId] = useState(null);
  return (
  <Box sx={{ flexGrow: 1 }} className="grid-mt">
        <Typography variant='h5'>
            <b>{gridCaption}</b>
        </Typography>
        <Grid container spacing={2}>
          {exoplanets.map((exoplanet) => (
            <Grid item xs={4} key={exoplanet.id}>
              <Card sx={{ maxWidth: 500, minHeight:'300px' }}>
              <Link href={`/pt/details?id=${exoplanet._id}`} onClick={() => setSelectedExoplanetId(exoplanet._id)}>
                <CardMedia sx={{ height: 140 }} 
                    image="https://drive.google.com/uc?id=1UTmqzmlYJYMFoa4F-QAWPFFiAhdqe1dN" 
                    title="" 
                />
              </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <IconStat
                      exoplanet={exoplanet}
                      id='planet'
                      svgurl='http://www.w3.org/2000/svg' 
                      alt='planet-icon'
                      statpull='pl_rade' //document property name (exoplanets.pl_rade)
                      statcontent='x' //string content to follow data
                    />
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
);
}

