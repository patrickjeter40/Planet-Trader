import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../common/Login';
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
    <Box>
      <AppBar position="static">
        <Toolbar className='header-pad'>
          
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
              <img
                src="https://www.dropbox.com/scl/fi/4fx7a09heoiv5j5ds5kak/planetlogo-1.PNG?rlkey=2lsj8miiqt3qo1j80hnf25ghs&dl=0"
                height={45} // Desired size with correct aspect ratio
                width={255} // Desired size with correct aspect ratio
                alt="Planet Trader Logo"
                quality={100}
                style={{objectFit: "cover", borderRadius: "30px"}}/>
            </Link>
          </div>

          <Login
            className="fb-20"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}