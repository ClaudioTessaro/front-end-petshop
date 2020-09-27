import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

export default function ContainerBase({ children, props }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: 100,
      "& > *": {
        margin: theme.spacing(5),
        width: theme.spacing(160),
        height: props ? theme.spacing(85) : theme.spacing(80),
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>{children}</Paper>
    </div>
  );
}
