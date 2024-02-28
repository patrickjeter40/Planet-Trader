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
              <img
                src="https://www.dropbox.com/scl/fi/4fx7a09heoiv5j5ds5kak/planetlogo-1.PNG?rlkey=2lsj8miiqt3qo1j80hnf25ghs&raw=1"
                height={45} // Desired size with correct aspect ratio
                width={255} // Desired size with correct aspect ratio
                alt="Planet Trader Logo"
                quality={100}
                style={{objectFit: "cover", borderRadius: "30px"}}/>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}