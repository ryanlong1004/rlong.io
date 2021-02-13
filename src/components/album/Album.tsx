import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Drawer from "../navbar/NavbarNew";
import { ScrollTop } from "../footer/Footer";
import Calendly from "../calendly/Calendly";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { GitHub } from "@material-ui/icons";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

function Copyright() {
  return (
    <React.Fragment>
      {/* <Drawer></Drawer> */}
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          rlong.io
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </React.Fragment>
  );
}

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

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
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
              <Grid container spacing={3} alignItems={"stretch"}>
                <Grid item>
                  <Link href="https://twitter.com/ryanrlong">
                    <TwitterIcon fontSize="large"></TwitterIcon>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://www.linkedin.com/in/rlongio/">
                    <LinkedInIcon fontSize="large"></LinkedInIcon>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://github.com/rlongio">
                    <GitHubIcon fontSize="large"></GitHubIcon>
                  </Link>
                </Grid>
              </Grid>
            </Typography>

            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              paragraph
            >
              I'm a full stack developer with nearly a decade of experience and
              a tool belt full of frameworks, pardigms and languages.
            </Typography>
          </Container>
        </div>
      </main>

      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
