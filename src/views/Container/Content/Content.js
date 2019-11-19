import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from '../../About/About';
import Home from '../../Home/Home';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
})

class Content extends Component {
  render() {
    const { classes } = this.props
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
    )
  }
}

export default withStyles(styles)(Content)
