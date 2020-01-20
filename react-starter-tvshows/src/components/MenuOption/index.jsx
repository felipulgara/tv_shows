import React, { useCallback } from 'react';
import {
  Grow,
  Paper,
  Popper,
  MenuList,
  MenuItem,
  IconButton
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon from '@material-ui/icons/Menu';

import { SERIES, PERSONAGES } from '../../routes/paths';

import useStyles from './styles';

const MenuOption = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <div className={classes.menu}>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        onClick={handleToggle}
      >
        <MenuIcon />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleNavigate(SERIES)}>Series</MenuItem>
                  <MenuItem onClick={handleNavigate(PERSONAGES)}>
                    Personajes
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default MenuOption;
