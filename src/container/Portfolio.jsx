import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import { white } from 'material-ui/styles/colors';
import { Grow } from '@material-ui/core';

import projectImg1 from '../assets/img/portfolio/project-1.jpg';
import projectImg2 from '../assets/img/portfolio/project-2.jpg';
import projectImg3 from '../assets/img/portfolio/project-3.jpg';
import projectImg4 from '../assets/img/portfolio/project-4.jpg';

const useStyle = makeStyles((theme)=>({
  root: {
    width: '100%',
    display: 'Block',
    padding: '4em 0 0 0',
  },
  head: {
    backgroundColor: theme.palette.common.blue,
    padding: '2.2em 0',
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    width: '100%',
    height: '100%',
    display: 'Block',
    justifyContent: 'center',
  },
  CardActionArea: {
    position: 'relative',
    height: 350,
  },
  cardMedia: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
  },
  cardContent: {
    position: 'relative',
    zIndex: 99999999,
    color: white,
    '& a': {
      color: white,
    },
    '& span': {
      color: white,
      textTransform: 'uppercase',
    },
  },


}));

export default function Portfolio (){
  const classes = useStyle();
    return(
      <div className="page">
        <div className={classes.head}></div>
        <Container maxWidth="md" component="main" className={classes.root}>
          <Grid container direction="row">
            <Grid item xs={12} align="center" className="page-heading mb-5">
              <Grow in timeout={800} >
                <Typography variant="h4">
                  Portfolio
                </Typography>
              </Grow>
              <Grow in timeout={900} >
                <Typography variant="h2" className="mb-4">
                  My Latest Work
                </Typography>
              </Grow>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={6}>
                <Grow in timeout={1000} >
                  <Card className={classes.card} square={true} >
                    <CardActionArea className={classes.CardActionArea}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={projectImg1}
                        title="Image title"/>
                      
                        <CardContent align="center" className="card-content">
                          <Typography variant="h3">
                            <Link href="#">Branding & Illustration Design</Link>
                          </Typography>
                          <Typography variant="span">
                            WEB DESIGN
                          </Typography>
                        </CardContent>
                      
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Grow in timeout={1000} >
                  <Card className={classes.card} square={true} >
                    <CardActionArea className={classes.CardActionArea}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={projectImg2}
                        title="Image title"/>
                      
                        <CardContent align="center" className="card-content">
                          <Typography variant="h3">
                            <Link href="#">Branding & Illustration Design</Link>
                          </Typography>
                          <Typography variant="span">
                            WEB DESIGN
                          </Typography>
                        </CardContent>
                      
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Grow in timeout={1000} >
                  <Card className={classes.card} square={true} >
                    <CardActionArea className={classes.CardActionArea}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={projectImg3}
                        title="Image title"/>
                      
                        <CardContent align="center" className="card-content">
                          <Typography variant="h3">
                            <Link href="#">Branding & Illustration Design</Link>
                          </Typography>
                          <Typography variant="span">
                            WEB DESIGN
                          </Typography>
                        </CardContent>
                      
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Grow in timeout={1000} >
                  <Card className={classes.card} square={true} >
                    <CardActionArea className={classes.CardActionArea}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={projectImg4}
                        title="Image title"/>
                      
                        <CardContent align="center" className="card-content">
                          <Typography variant="h3">
                            <Link href="#">Branding & Illustration Design</Link>
                          </Typography>
                          <Typography variant="span">
                            WEB DESIGN
                          </Typography>
                        </CardContent>
                      
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>

          </Grid>
        </Container>
        
      </div>
    )
}