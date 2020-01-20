import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
  Container,
  CssBaseline
} from '@material-ui/core';

import { addSerie } from '../../actions/series';
import { useActions } from '../../hooks';

import useStyles from './styles';

const Copyright = () => (
  <Typography variant='body2' color='textSecondary' align='center'>
    {'Copyright © '}
    <Link color='inherit' href='https://material-ui.com/'>
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const ModalAdd = ({ open, handleClose }) => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  const [name, setName] = useState('');
  const [release, setRelease] = useState(0);

  const { onAddSerie } = useActions({
    onAddSerie: addSerie
  });

  const handleChangeName = key => ({ target: { value } }) => {
    setName({ [key]: value });
  };

  const handleChangeRelease = key => ({ target: { value } }) => {
    setRelease({ [key]: value });
  };

  const onSubmit = () => {
    const { _name } = name;
    const { _release } = release;

    console.log(_name, _release);
    const items = {
      name: _name,
      release: _release
    };

    onAddSerie(items);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} className={classes.app}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            ref={register}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Name'
              name='_name'
              autoFocus
              onChange={handleChangeName('_name')}
              ref={register}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='_release'
              label='Release'
              onChange={handleChangeRelease('_release')}
              ref={register}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Add Serie
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Dialog>
  );
};

export default ModalAdd;
