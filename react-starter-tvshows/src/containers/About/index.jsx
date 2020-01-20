import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid
} from "@material-ui/core";

import useStyles from "./styles";

const About = () => {
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
              Acerda de app
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Tv Show App
            </Typography>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              maxime quae pariatur ipsa quod nisi repudiandae! Aliquid, itaque
              officia! Quam placeat beatae veniam eaque cumque, soluta ex?
              Explicabo, doloribus? Perspiciatis excepturi praesentium officiis
              totam, repudiandae quae nam voluptatum recusandae assumenda
              dolorem veniam sunt vitae ex voluptas laborum rerum laboriosam at.
            </Typography>
            <Typography variant="h5" component="h3">
              Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dolor earum nisi molestiae tenetur voluptates similique a, hic
              delectus ut ex omnis, minus tempora nostrum sapiente deleniti ea
              rem officia fugit at? Nisi aperiam, cupiditate dolorum, quisquam
              beatae error iste fugiat quia, ab tempora quod iusto deleniti
              eligendi maiores mollitia possimus optio facere autem! Iste
              deleniti, enim eos ea labore quod voluptatum distinctio? Quia
              pariatur tempore fuga nulla in laboriosam praesentium ratione
              perspiciatis optio atque itaque mollitia voluptate quibusdam porro
              quod eligendi rem numquam excepturi aperiam eum alias, dolorum at.
              Ad possimus velit voluptatum doloremque vitae ex, culpa voluptates
              ab.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default About;
