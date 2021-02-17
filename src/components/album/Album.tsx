import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Hero from "../Hero";
import { Footer } from "../Footer";

export const useStyles = makeStyles((theme) => ({
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
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Hero />
      </main>

      <Footer />
    </React.Fragment>
  );
}
