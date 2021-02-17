import Typography from "@material-ui/core/Typography";
import React from "react";
import { Copyright } from "./Copyright";
import { useStyles } from "./album/Album";

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      ></Typography>
      <Copyright />
    </footer>
  );
}
