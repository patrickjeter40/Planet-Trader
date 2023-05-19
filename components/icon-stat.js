import { planetPathData } from '../assets/svg/icons';


export default function IconStat({ exoplanet, id, svgurl, alt, statpull, statcontent  }) {

 
  
  return (
      <div class="d-flex justify-right">
        <div class="mr-auto">
          {exoplanet.PLANET}
        </div>
        <svg xmlns={svgurl} alt={alt} viewBox="0 0 100 100" id={id}  style={{maxWidth: "10%", marginRight:"2%"}}>
          <path d={planetPathData} />
        </svg>
        {Math.floor(exoplanet[statpull] * 10) / 10}{statcontent}        
      </div>
    );
  }
  

 