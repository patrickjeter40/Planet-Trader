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
  const { data: session } = useSession()

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
              <div class="link-wrapper">
                <Link href="/dashboard">
                  <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                </Link>
                <Link href="/account">
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Link>
              </div>
              <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
  </Popper>
  )
}