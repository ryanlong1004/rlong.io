import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

// const useStyles = makeStyles((theme) => ({}));

type SocialListProps = {
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
};

export default function SocialList({ spacing }: SocialListProps) {
  return (
    <React.Fragment>
      <Grid container spacing={spacing ? spacing : 3} alignItems={"stretch"}>
        <Grid item>
          <Link href={"https://twitter.com/ryanrlong"}>
            <TwitterIcon fontSize="large"></TwitterIcon>
          </Link>
        </Grid>
        <Grid item>
          <Link href={"https://www.linkedin.com/in/rlongio/"}>
            <LinkedInIcon fontSize="large"></LinkedInIcon>
          </Link>
        </Grid>
        <Grid item>
          <Link href={"https://github.com/rlongio"}>
            <GitHubIcon fontSize="large"></GitHubIcon>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
