import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Copyright } from "./Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    margin: "0 auto",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
}
