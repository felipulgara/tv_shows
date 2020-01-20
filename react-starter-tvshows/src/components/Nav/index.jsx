import React, { useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Container
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { ROOT, ABOUT } from '../../routes/paths';
import logo from '../../resources/img/logo.png';
import MenuOption from '../MenuOption';

import useStyles from './styles';

const Nav = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  return (
    <Container>
      <AppBar position='static' className={classes.nav}>
        <Toolbar>
          <img className={classes.logo} src={logo} alt='' />
          <Typography variant='h6' className={classes.title}>
            React Layout App
          </Typography>
          <Tabs value={value} onChange={handleChange} color='inherit'>
            <Tab label='Inicio' onClick={handleNavigate(ROOT)} />
            <Tab label='Acerca de' onClick={handleNavigate(ABOUT)} />
          </Tabs>
          <MenuOption />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Nav;
