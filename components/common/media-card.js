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
          image="https://previews.dropbox.com/p/thumb/ACIpgfa3v1304aXl4xArVjXAFEqaKCq_EpxcZb3IGyl68SYZFGgFx0GJZld5ELRIHLe6xOQaHlTvPfi8L2LKfCANp8FRznjwQpSRjnU4RrrWvqCuyLTkG1YaDg2ELMNrGoUOCT3dAg02aOKm7r9IwDEK5Y7hPcFiox5CtyIGOmyV7NVQ5D7jE6zIjeysISBAd02z78lop_UQzshWJjFED0uNnVBkjqc9YeUgSM1vDhodC1pYYAqUAS6a8KuSkxPm_aec4udAU1JWIdfnpf6qGUD-xb8ZDv-5v-n6tqMCQvW223pFhwme77qsJ9jCztLe5vuQD4zl-B-asUX6tfpb-OvO/p.jpeg" 
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
