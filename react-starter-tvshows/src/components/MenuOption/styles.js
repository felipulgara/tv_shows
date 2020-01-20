import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "right"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default useStyles;
