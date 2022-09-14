import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabContainer: {
    background: 'transparent',
    border: 0,
    marginLeft: 'auto'
  },
  toolbar:{
    padding: '0'
  },
  logo: {
    fontWeight: '800',
    fontSize: '20px',
    color: '#fff'
  },
  tab: {
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'capitalize',
    fontSize: '15px',
    fontWeight: '500',
    minWidth: '70px',
    padding: '1.4rem 25px',
    zIndex: '99999999',
    color: '#fff',
    position: 'relative',
    '&:hover': {
      color: '#fff',
      background: '#3e9ff9',
      opacity: 1
    },
    '&:focus': {
      color: '#fff',
      backgroundColor: '#3e9ff9',
    }
  },
  drawerWrap: {
    backgroundColor: theme.palette.common.blue,
    color: '#fff',
    minWidth: '200px',
    padding: '30px 0',
    '& h5': {
      paddingLeft: '30px',
      paddingBottom: '15px'
    },
    '& a': {
      paddingLeft: '30px',
    }
  },
  drawerItem: {
    color: 'white',
    opacity: .9,
    '&:hover': {
      color: 'white',
      opacity: 1,
    }
  },
  drawerItemSelected: {
    opacity: 1,
  },
  DrawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    }
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
  },
  
  
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props){
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [open,setOpen] = useState(false);
  const[value,setValue] = useState(0)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false)
  };

  const handleChange = (e, value) =>{
    setValue(value)
  }

  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false)
  const classes = useStyles();

  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab className={classes.tab} component={Link} to="/about" label="About" />
        <Tab className={classes.tab} component={Link} to="/services" label="Services" />
        <Tab className={classes.tab} component={Link} to="/portfolio" label="Portfolio" />
        <Tab className={classes.tab} component={Link} to="/pricing" label="Pricing" />
        <Tab className={classes.tab} component={Link} to="/blog" label="Blog" />
        <Tab className={classes.tab} component={Link} to="/contact" label="Contact" />
      </Tabs>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer 
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS} 
      open={openDrawer}
      onClose={()=>setOpenDrawer(false)} 
      onOpen={()=>setOpenDrawer(true)}
      classes={{paper: classes.drawerWrap}}>
        <List disablePadding>
          <h5>Menu</h5>
          <Divider />
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(0)}} 
          component={Link} to="/"
          selected={value === 0}>
            <ListItemText 
            className={value===0 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(1)}}  
          component={Link} to="/about"
          selected={value === 1}>
            <ListItemText 
            className={value===1 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>About</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(2)}}
          component={Link} to="/services"
          selected={value === 2}>
            <ListItemText 
            className={value===2 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem}
            disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(3)}} 
          component={Link} to="/portfolio"
          selected={value === 3}>
            <ListItemText
            className={value===3 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>Portfolio</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(4)}} 
          component={Link} to="/pricing"
          selected={value === 4}>
            <ListItemText
            className={value===4 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>Pricing</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(5)}} 
          component={Link} to="/blog"
          selected={value === 5}>
            <ListItemText
            className={value===5 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>Blog</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(6)}} 
          component={Link} to="/contact"
          selected={value === 6}>
            <ListItemText
            className={value===6 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>Contact</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.DrawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  const trigger = useScrollTrigger();

  return(
    <div className="main-nav">
      <ElevationScroll>
        <AppBar position="fixed" color={trigger ? 'primary' : 'transparent'}>
          <Container maxWidth="md">
            <Grid container direction="row">
              <Grow in timeout={800} >
                <Grid item xs="12">
                  <Toolbar className={classes.toolbar}>
                    <span className={classes.logo}>Kn.Ford</span>
                    {matches ? drawer : tabs}
                  </Toolbar>
                </Grid>
              </Grow> 
            </Grid>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}