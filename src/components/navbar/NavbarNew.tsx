import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import clsx from "clsx";
import React from "react";
import Calendly from "../calendly/Calendly";

const useStyles = makeStyles({
  hamburger: {
    position: "fixed",
    width: "1%",
    right: 0,
    top: "50%",
  },
  white: {
    color: "white",
  },
  paperBackground: {
    background: "rgba(0, 0, 0, .5)",
  },
  logo: {
    margin: "auto 0 0",
    width: "100%",
    padding: "2.5rem",
  },
  list: {
    width: "800px",
    color: "white",
    textTransform: "uppercase",
  },
  fullList: {
    width: "auto",
  },
  link: {
    color: "white",
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  inline: {
    display: "inline",
  },
  secondary: {
    color: "white",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

export default function Drawer() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Calendly></Calendly>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className={classes.hamburger}
            variant="contained"
            color="primary"
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </Button>
          <SwipeableDrawer
            classes={{
              paper: classes.paperBackground,
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
