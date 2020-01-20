import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  Grid
} from "@material-ui/core";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Desarrollos de prueba
            </Typography>
            <Typography variant="h5" component="h2">
              Aplicación de series y películas
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Tv Show App
            </Typography>
            <Typography variant="body2" component="p">
              Para códigos fuentes, visitar GitHub de desarrollador
              <br />
              {"Enlaces a continuación:"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://github.com/Felipepulgara">GitHub Felipe</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default Home;
