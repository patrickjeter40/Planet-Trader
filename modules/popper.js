import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

export default function PopperCard(props) {
  const { open, handleToggle, handleClose, handleListKeyDown, anchorRef } = props;
  return (
    <Popper
    open={open}
    anchorEl={anchorRef.current}
    role={undefined}
    placement="bottom-start"
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
  </Popper>
  )
}