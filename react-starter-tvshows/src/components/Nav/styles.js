import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  nav: {
    background: '#191919',
    borderRadius: '5px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logo: {
    width: '40px',
    marginRight: '25px'
  },
  menu: {
    alignItems: 'center'
  }
}));

export default useStyles;
