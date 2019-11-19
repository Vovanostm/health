import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240

const styles = theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 5 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 7 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
})

class Navbar extends Component {
  state = {
    open: true,
    links: [
      {
        href: "/",
        title: "Главная",
        icon: <HomeIcon />
      },
      {
        href: "/about",
        title: "О проекте",
        icon: <InfoIcon />
      }
    ]
  }

  handleDrawerClose = () => {
    this.props.hideMenu()
  }

  render() {
    const { classes, theme } = this.props
    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: this.props.menuOpen,
          [classes.drawerClose]: !this.props.menuOpen
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: this.props.menuOpen,
            [classes.drawerClose]: !this.props.menuOpen
          })
        }}
        open={this.props.menuOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {this.state.links.map(({ href, title, icon }, index) => (
            <Link to={href}>
              <ListItem button key={title}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Navbar)
