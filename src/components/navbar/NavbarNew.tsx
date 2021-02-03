import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import logo from "./img/rect_white_standard.png";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MeAvatar from "./img/me.png"

const useStyles = makeStyles({
    hamburger: {
        position: "fixed",
        width: "1%",
        right: 0,
        top: "50%",
    },
    white: {
        color: 'white'
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
        width: 250,
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
        color: 'white',
    }
});

type Anchor = "top" | "left" | "bottom" | "right";

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}

export default function Drawer() {
    const classes = useStyles();
    const preventDefault = (event: React.SyntheticEvent) =>
        event.preventDefault();

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
            <img src={logo} className={classes.logo} alt="rlong.io logo"></img>
            <List>
                {["mentoring", "contact", "resume", "projects"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemLink href="about">
                            <ListItemText>{text}</ListItemText>
                        </ListItemLink>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Ryan Long" src={MeAvatar} />
                    </ListItemAvatar>
                    <ListItemText
                        classes={{
                            secondary: classes.white
                        }}
                        primary="Ryan Long"
                        secondary="ryan@rlong.io"
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText
                        classes={{
                            secondary: classes.white
                        }}
                        primary="‪(347) 450-1061‬"
                    />
                </ListItem>
                <Divider />
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
