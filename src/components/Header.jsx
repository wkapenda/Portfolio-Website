//jshint esversion:6

import React, {useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Drawer dependencies
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from "@material-ui/core";




function Header(){

  const scrollToTop = () => scroll.scrollToTop();

  // const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Drawer functions

  const drawerWidth = 300;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const styles = {

    largeIcon: {
      width: 90,
      height: 90,
      color: "white",
    },
  
  };

  
  return(

    <div className="${classes.root} appTop">

    <CssBaseline />
    
    <AppBar
      position="fixed"
      className="${clsx(classes.appBar, { [classes.appBarShift]: open })} Nav navRes"
      
    >
      <Toolbar>
      <div className="hamIcon">
        <IconButton
          
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide) }        
        >     
          <MenuIcon style={styles.largeIcon} /> 
        </IconButton>
      </div>

      <div className="spacer"></div>

        <Link
            className="logo navbar-brand btn"
            alt="Logo"
            onClick={scrollToTop} 
        >
        <img src={require("./images/wklogo.png")} alt="My website logo" class="wklogo"></img>
        </Link>

        <div className="navlinks  ml-auto">
          <Link
                className="btn"
                activeClass="active"
                to="section1"
                smooth={true}
                offset={-70}
                duration={500}
                // type="button"
              >
                HOME
          </Link>

          <Link
                className="btn"
                activeClass="active"
                to="section2"
                smooth={true}
                offset={-70}
                duration={500}
                // type="button"
              >
                SKILLS
          </Link>

          <Link
                className="btn"
                activeClass="active"
                to="section3"
                smooth={true}
                offset={-70}
                duration={500}
                // type="button"
              >
                PROJECTS
          </Link>

          <Link
                className="btn"
                activeClass="active"
                to="section4"
                smooth={true}
                offset={-70}
                duration={500}
                // type="button"
              >
                ABOUT
          </Link>

          <Link
                className="btn contact-btn btn-primary"
                // type="button"
                // activeClass="active"
                to="section5"
                // spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT ME
          </Link>
          </div>
      </Toolbar>
    </AppBar>

    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className="${classes.drawerHeader} navSlideBar Nav">
      <div className="spacer"></div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon style={styles.largeIcon}/>
          ) : (
            <ChevronRightIcon style={styles.largeIcon}/>
          )}
        </IconButton>
      </div>
      <Divider />
      <List>

      <ListItem button>
      <Link
          className="btn"
          activeClass="active"
          to="section1"
          smooth={true}
          offset={-70}
          duration={500}
          style={{ color: "black" }}
        >

        <Typography variant="h4"> 
        Home
        </Typography>
          
        </Link>
      </ListItem>

      <ListItem button>
      <Link
          className="btn"
          activeClass="active"
          to="section2"
          smooth={true}
          offset={-70}
          duration={500}
          style={{ color: "black" }}
        >

        <Typography variant="h4"> 
        Skills
        </Typography>

        </Link>
      </ListItem>

      <ListItem button>
      <Link
          className="btn"
          activeClass="active"
          to="section3"
          smooth={true}
          offset={-70}
          duration={500}
          style={{ color: "black" }}
        >

        <Typography variant="h4"> 
        Projects
        </Typography>

        </Link>
      </ListItem>

      <ListItem button>
      <Link
          className="btn"
          activeClass="active"
          to="section4"
          smooth={true}
          offset={-70}
          duration={500}
          style={{ color: "black" }}
        >

        <Typography variant="h4"> 
        About
        </Typography>

        </Link>
      </ListItem>

      <ListItem button>
      <Link
          className="btn"
          activeClass="active"
          to="section5"
          smooth={true}
          offset={-70}
          duration={500}
          style={{ color: "black" }}
        >

        <Typography variant="h4"> 
        Contact Me
        </Typography>

        </Link>
      </ListItem>

      </List>

      <Divider />
    </Drawer>



  </div>

  );
}

export default Header;