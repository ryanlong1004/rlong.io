import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";

// const useStyles = makeStyles((theme) => ({}));

type SocialListProps = {
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
};

export default function SocialList({ spacing }: SocialListProps) {
  return (
    <React.Fragment>
      <Grid container spacing={4} alignItems={"flex-start"}>
        <Grid item>
          <label>
            <Link href={"https://twitter.com/ryanrlong"}>
              <TwitterIcon fontSize="large"></TwitterIcon>
            </Link>
          </label>
        </Grid>
        <Grid item>
          <label>
            <Link href={"https://www.linkedin.com/in/ryanlong1004/"}>
              <LinkedInIcon fontSize="large"></LinkedInIcon>
            </Link>
          </label>
        </Grid>
        <Grid item>
          <label>
            <Link href={"https://github.com/ryanlong1004"}>
              <GitHubIcon fontSize="large"></GitHubIcon>
            </Link>
          </label>
        </Grid>
        <Grid item>
          <label></label>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
