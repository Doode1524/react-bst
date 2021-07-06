import React from "react";
import {makeStyles} from '@material-ui/core/styles'
// import Tree from "react-d3-tree";

const useStyles = makeStyles({
  node: {
    borderBottom: "5px solid black",
    margin: 0,
    padding: 0,
    width: "5em",
  }
})

const TreeComponent = (props) => {
  const classes = useStyles(props)
  return (
    <div style={{padding: "0px", margin: "0px", textAlign: "center", display: "flex"}}>
      <h1 className={classes.node}>21</h1>
    </div>
  );
};

export default TreeComponent;
