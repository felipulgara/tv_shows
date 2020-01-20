import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Button,
  TableRow,
  TableCell,
  Grid,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  withStyles,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';

import useMount from '../../hooks/useMount';
import {
  fetchSerie,
  setSerieEdit,
  editSerie,
  deleteSerie,
  setStatus
} from '../../actions/series';
import { useActions } from '../../hooks';

import useStyles from './styles';
import ModalAdd from './modalAdd';

const Series = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { series, serieEdit } = useSelector(({ series }) => series);
  const { register, handleSubmit } = useForm();

  const { onEditSerie, onDeleteSerie } = useActions({
    onEditSerie: editSerie,
    onDeleteSerie: deleteSerie
  });

  const handleGetSeries = useCallback(element => dispatch(fetchSerie()), [
    dispatch
  ]);

  useMount(async () => {
    handleGetSeries();
  });

  const handleOpenModal = (user, index) => () => {
    dispatch(setSerieEdit(index, user));
  };

  const handleClose = () => {
    dispatch(setSerieEdit(-1, null));
  };

  const handleCloseModalAdd = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onSubmit = ({ _name, _release, id }) => {
    const items = {
      name: _name,
      release: _release
    };

    onEditSerie(items, id);
    handleClose();
  };

  const StyledTableCell = withStyles(() => ({
    head: {
      fontSize: 20
    }
  }))(TableCell);

  const dialogJSX = !!serieEdit.data && (
    <Dialog
      open={!!serieEdit.data}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      className={classes.app}
    >
      <DialogTitle id='alert-dialog-title'>Update serie</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          <form
            className={classes.appForm}
            onSubmit={handleSubmit(onSubmit)}
            ref={register}
          >
            <Grid item>
              <input
                type='hidden'
                name='id'
                value={serieEdit.data.id}
                ref={register}
              />
              <label className={classes.labelForm}>Name:</label>
              <input
                className={classes.appFormItem}
                name='_name'
                label='Name'
                type='input'
                ref={register}
                defaultValue={serieEdit.data.name}
              />
            </Grid>
            <Grid item>
              <label className={classes.labelForm}>Release:</label>
              <input
                className={classes.appFormItem}
                name='_release'
                label='Name'
                type='input'
                ref={register}
                defaultValue={serieEdit.data.release}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.buttonForm}
                type='submit'
                color='secondary'
                variant='contained'
              >
                {'Update'}
              </Button>
            </Grid>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );

  const renderSeriesList = (lista, index) => (
    <TableRow key={lista.id}>
      <TableCell align='left'>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Typography variant='h6'>{lista.name}</Typography>
            <Typography variant='subtitle2'>
              Año de lanzamiento: {lista.release}
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align='right'>
        <Fab
          color='primary'
          aria-label='edit'
          className={classes.actions}
          onClick={handleOpenModal(lista, index)}
        >
          <EditIcon />
        </Fab>
        <Fab
          color='secondary'
          aria-label='delete'
          className={classes.actions}
          onClick={() => onDeleteSerie(lista.id)}
        >
          <DeleteIcon />
        </Fab>
      </TableCell>
    </TableRow>
  );

  return (
    <Container>
      <Paper>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Total series: {series.length} - Agrega una más
                <Fab
                  color='secondary'
                  aria-label='delete'
                  className={classes.actions}
                  onClick={() => handleOpen()}
                >
                  <AddIcon />
                </Fab>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <ModalAdd open={open} handleClose={handleCloseModalAdd} />
          <TableBody>{series.map(renderSeriesList)}</TableBody>
        </Table>
      </Paper>
      {dialogJSX}
    </Container>
  );
};

export default Series;
