import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import SocialList from "./Social";

const useStyles = makeStyles((theme) => ({
  marker: {
    fontFamily: "Permanent Marker",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: "fixed",
    width: "100%",
    bottom: 0,
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="left"
          color="textPrimary"
          gutterBottom
          className={classes.marker}
        >
          Ryan Long
        </Typography>
        <Typography
          component="h4"
          variant="h5"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          <SocialList spacing={9}></SocialList>
        </Typography>

        <Typography variant="h5" align="left" color="textSecondary" paragraph>
          full stack developer with nearly a decade of experience and a tool
          belt full of frameworks, pardigms and languages.
        </Typography>
      </Container>
    </div>
  );
}
