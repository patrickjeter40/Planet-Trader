import * as React from 'react';
import Card from '@mui/material/Card';
import CardBookmark from './card-bookmark';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import IconStat from './icon-stat';



export default function MediaCard({ exoplanet, page }) {

 
  
  return (
    <Card sx={{ maxWidth: 500, flexBasis: "50%", minHeight:'300px' }}>
      <Link href={page} onClick=''>
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
  );
}
