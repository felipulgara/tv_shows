import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    paddingTop: "20px",
    color: "#FFF"
  },
  card: {
    minWidth: 500
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

export default useStyles;
