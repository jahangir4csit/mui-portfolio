import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import aboutImg from '../assets/img/about.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grow } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
  head: {
    backgroundColor: theme.palette.common.blue,
    padding: '2.2em 0',
  },
  aboutWrap: {
    padding: '5.3em 0',
  },
  aboutImg: {
    height: '600px',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '&::before': {
      position: 'absolute',
      bottom: '130px',
      left: '-30px',
      width: '100%',
      height: '100px',
      content: `''`,
      background: '#89c4fb',
      zIndex: '-1',
    },
    '&::after': {
      position: 'absolute',
      bottom: '30px',
      left: '-30px',
      width: '100%',
      height: '100px',
      content: `''`,
      background: '#57abfa',
      zIndex: '-1',
    }
  },
  aboutContent: {
    display: 'Block',
  },
  aboutTabs: {
    opacity: '1',
    '& div div': {
      paddingBottom: '10px',
    },
    '& button': {
      color: '#777',
      backgroundColor: '#fff',
      opacity: 1,
      border: 'none',
      textTransform: 'uppercase',
      fontSize: '13px',
      fontWeight: 700,
      marginRight: '10px',
      marginBottom: '-1px',
      borderTopLeftRadius: '.25rem',
      borderTopRightRadius: '.25rem',
    },
    '& button.Mui-selected': {
      backgroundColor: theme.palette.common.blue,
      color: '#fff',
      overflow: 'visible',
      borderRadius: '4px',
      padding: '.8rem 1.5rem',

      '&::after': {
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      webkitTransform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)',
      transform: 'translateX(-50%)',
      content: `''`,
      width: '0',
      height: '0',
      borderStyle: 'solid',
      borderWidth: '10px 10px 0',
      borderColor: '#0779e4 transparent transparent transparent',
      }
    }
  },
  tabContentWrap: {
    '& div.MuiBox-root': {
      padding: '25px 0',
    },
    '& h2': {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '1.4',
    },
    '& h3': {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '1.5',
    },
    '& h4': {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '1.4',
    }
  },
  progTitle: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: '14px',
    display: 'inline-block',
    marginBottom: '10px',
  },
  progParcent: {
    color: theme.palette.common.blue,
    fontSize: '16px',
    fontWeight: 400,
    float: 'right',
    marginRight: '5%',
    display: 'inline-block',
  },
  date: {
    fontSize: '13px',
    fontWeight: '500',
    marginRight: '5px',
    color: theme.palette.common.blue,
  },
  position: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#ccc',
  },

}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary,
  },
}))(LinearProgress);

export default function About() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const classes = useStyle();
    return(
      <div>
        <div className={classes.head}></div>
        <Container maxWidth="md" className={classes.aboutWrap}>
          <Grid container direction="row" spacing={6}>
            <Grid item xs="12" sm="6" >
              <Grow in timeout={1000} >
                <Grid container >
                  <Grid item className={classes.aboutImg} style={{ backgroundImage: `url(${aboutImg})` }}></Grid>
                </Grid>
              </Grow>
            </Grid>
            <Grid className={classes.aboutContent} item xs="12" sm="6" >
              <Grid container>
                <Grow in timeout={1000} >
                  <Grid item direction="column">
                    <Tabs className={classes.aboutTabs} value={value} onChange={handleChange} aria-label="tabs" indicatorColor="">
                    <Grow in timeout={1000} ><Tab label="ABOUT ME" {...a11yProps(0)} /></Grow>
                      <Tab label="SKILLS" {...a11yProps(1)} />
                      <Tab label="EXPERIENCE" {...a11yProps(2)} />
                    </Tabs>
                  </Grid>
                </Grow>
                <Grid item direction="column">
                  <Grow in timeout={1000} >
                    <TabPanel value={value} index={0} className={classes.tabContentWrap}>
                      <Typography variant="h2" className="mb-4">
                        My Story
                      </Typography>
                      <Typography variant="body2" display="block" className="mb-5 text-mute">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
                        Semantics, a large language ocean.
                      </Typography>
                      <Typography variant="h3" className="mb-5">
                        I Do Web Design & Developement since I was 18 Years Old
                      </Typography>
                      <Typography variant="body2" display="block" className="mb-4 text-mute">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts.
                      </Typography>
                    </TabPanel>
                  </Grow>
                  <TabPanel value={value} index={1} className={classes.tabContentWrap}>
                    <Typography variant="h2" className="mb-4">
                      Skills
                    </Typography>
                    <Typography variant="body2" display="block" className="mb-5 text-mute">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                      Semantics, a large language ocean.
                    </Typography>
                    <Grid container direction="row">
                      <Grid item xs="12" sm="6" className="pr-4">
                        <Box component="fieldset" mb={3} borderColor="transparent">
                          <Typography className={classes.progTitle} variant="p">Adobe Photoshop</Typography>
                          <Typography variant="p" className={classes.progParcent}>80%</Typography>
                          <BorderLinearProgress variant="determinate" value={80} />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                          <Typography className={classes.progTitle} variant="p">Javascript</Typography>
                          <Typography variant="p" className={classes.progParcent}>88%</Typography>
                          <BorderLinearProgress variant="determinate" value={88} />
                        </Box>
                      </Grid>
                      <Grid item xs="12" sm="6" className="pl-4">
                        <Box component="fieldset" mb={3} borderColor="transparent">
                          <Typography className={classes.progTitle} variant="p">Html/Css</Typography>
                          <Typography variant="p" className={classes.progParcent}>90%</Typography>
                          <BorderLinearProgress variant="determinate" value={90} />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                          <Typography className={classes.progTitle} variant="p">Wordpress</Typography>
                          <Typography variant="p" className={classes.progParcent}>85%</Typography>
                          <BorderLinearProgress variant="determinate" value={85} />
                        </Box>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={2} className={classes.tabContentWrap}>
                    <Grid container direction="column">
                      <Grid item direction="column"  className="mb-4">
                        <Typography variant="h4">
                          Art & Creative Director
                        </Typography>
                        <Typography variant="p" className={classes.date}>2014-2015 <RoomIcon /></Typography>
                        <Typography variant="p" className={classes.position}>Google Inc.</Typography>
                        <Typography variant="body2" display="block" className="text-mute">
                          A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </Typography>
                      </Grid>
                      <Grid item direction="column"  className="mb-4">
                        <Typography variant="h4">
                          Wordpress Developer
                        </Typography>
                        <Typography variant="p" className={classes.date}>2014-2015 <RoomIcon /></Typography>
                        <Typography variant="p" className={classes.position}>Google Inc.</Typography>
                        <Typography variant="body2" display="block" className="text-mute">
                          A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </Typography>
                      </Grid>
                      <Grid item direction="column" className="mb-4">
                        <Typography variant="h4">
                          UI/UX Designer
                        </Typography>
                        <Typography variant="p" className={classes.date}>2014-2015 <RoomIcon /></Typography>
                        <Typography variant="p" className={classes.position}>Google Inc.</Typography>
                        <Typography variant="body2" display="block" className="text-mute">
                          A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </Typography>
                      </Grid>
                    </Grid>
                  </TabPanel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        
      </div>
    )
}