import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Signin from '../signin';
import PopperCard from '../../modules/popmenu';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import AvatarPic from "../common/avatar"
import Image from 'next/image';

export default function Header({ title }) {
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const { data: session } = useSession()
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <AvatarPic />
            <PopperCard
              open={open}
              handleClose={handleClose}
              handleListKeyDown={handleListKeyDown}
              anchorRef={anchorRef} 
            />
            <MenuIcon />
          </IconButton>
          <Typography className='fb-15 mw-200' variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {title}
          </Typography>
          <div style={{ display: "flex", flexGrow: 1 }}>
          <Link 
              href={"/pt/dashboard"}
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
          
          <Signin
            className="fb-20"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}