import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Content from './Content/Content';
import MenuAppBar from './MenuAppBar/MenuAppBar';
import Navbar from './Navbar/Navbar';

const styles = theme => ({
  root: {
    display: "flex"
  }
})

class Container extends Component {
  state = {
    menuOpen: false
  }

  handleOpenMenu = () => {
    this.setState({ menuOpen: true })
  }
  handleHideMenu = () => {
    this.setState({ menuOpen: false })
  }
  render() {
    const { classes } = this.props
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <MenuAppBar
            menuOpen={this.state.menuOpen}
            openMenu={this.handleOpenMenu}
          />
          <Navbar
            menuOpen={this.state.menuOpen}
            hideMenu={this.handleHideMenu}
          />
          <Content />
        </div>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(Container)
