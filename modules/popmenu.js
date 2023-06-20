import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

export default function PopperCard(props) {
  const { open, handleClose, handleListKeyDown, anchorRef } = props;
  const { data: session } = useSession();


  return (
    <Popper
    open={open}
    anchorEl={anchorRef.current}
    role={undefined}
    placement="bottom-start"
    style={{zIndex: "1"}}
    transition
    disablePortal
    >
      {({ TransitionProps, placement }) => (
      <Grow
      {...TransitionProps}
      style={{
      transformOrigin:
      placement === 'bottom-start' ? 'left top' : 'left bottom',
      }}
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            autoFocusItem={open}
            id="composition-menu"
            aria-labelledby="composition-button"
            onKeyDown={handleListKeyDown}
            >
            {session && (
              <div class="link-wrapper">
                <Link href="/pt/myPlanets">
                  <MenuItem onClick={handleClose}>My Planets</MenuItem>
                </Link>
                <Link href="/acct/account">
                  <MenuItem onClick={handleClose}>Account</MenuItem>
                </Link>
              </div>
            )}
            {session && (
              <MenuItem 
                href='/pt/dashboard' 
                onClick={() => signOut({ callbackUrl: 'http://localhost:3000/pt/dashboard' })}
                >Logout
              </MenuItem>
            )}
            {!session && (
              <MenuItem 
                href='/pt/dashboard' 
                onClick={() => signIn()}
                >Login
            </MenuItem>      
            )}    
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
  </Popper>
  )
}