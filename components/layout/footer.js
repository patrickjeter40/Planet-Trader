import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@mui/material/Container';


export default function Footer({ title }) {
  const [open, setOpen] = React.useState(false);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box 
    sx={{ flexGrow: 1 }}
    className='footer'
    >
      <AppBar position="static">
        <Container fixed={true} className='d-flex justify-between align-i-center text-dec-no pt-20'>  
        <div>
          © 2022-2023 Patrick Jeter
        </div>
          <Link href={"/acct/terms"} className='white'>
              Terms & Conditions
          </Link>
        </Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {title}
          </Typography>
          <div style={{ display: "flex", flexGrow: 1 }}>
            <Link 
              href={"/dashboard"}
              style={{margin: "auto auto auto auto"}}
            >
              <Image
                src="https://drive.google.com/uc?id=1GgVBerg9ol99O1dsjNIeQZTK3YM6No9c" // Route of the image file
                height={45} // Desired size with correct aspect ratio
                width={255} // Desired size with correct aspect ratio
                alt="Planet Trader Logo"
                quality={100}
                style={{objectFit: "none", borderRadius: "30px"}}
                
              />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}