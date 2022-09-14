import React from 'react';
import Container from '@material-ui/core/Container';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import { white } from 'material-ui/styles/colors';
import { Grow } from '@material-ui/core';


const useStyle = makeStyles((theme)=>({
  root: {
    width: '100%',
    display: 'Block',
    padding: '4em 0',
  },
  head: {
    backgroundColor: theme.palette.common.blue,
    padding: '2.2em 0',
  },
  card: {
    padding: '1.7rem 1.6rem 2.4rem 1.6rem',
    borderRadius: '4px',
  },
  cardMedia: {
    padding: '16px 16px 0px 16px',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      bottom: '4px',
      left: '19%',
      content: `''`,
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '5px 5px 0 5px',
      borderColor: '#0779e4 transparent transparent transparent'
    },
    '& svg': {
      fontSize: '40px',
      backgroundColor: theme.palette.common.blue,
      color: white,
      width: '60px',
      height: '50px',
      padding: '8px',
    }
  },
  cardAction: {
    padding: '0px 16px 16px 16px',
    '& a':{
      color: theme.palette.common.blue,
      fontSize: '16px',
      fontWeight: 400,
    },
    '& svg': {
      fontSize: '22px',
      verticalAlign: 'middle',
      marginLeft: '3px'
    }
  }

}));

export default function Services() {
  const classes = useStyle();
    return(
      <div className="page">
        <div className={classes.head}></div>
          <Container maxWidth="md" className={classes.root}>
            <Grid container direction="row">
              <Grid item xs={12} align="center" className="page-heading mb-5">
                <Grow in timeout={800} >
                  <Typography variant="h4">
                    Services
                  </Typography>
                </Grow>
                <Grow in timeout={900} >
                  <Typography variant="h2" className="mb-4">
                    This is My Expertise, The <br/>Services I'll Provide My Clients
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
            <Grid container spacing={3} >
              <Grid item xs={12} sm={6} md={4}>
                <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                      <WebIcon />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h3" component="h2">
                        UI & UX Design
                      </Typography>
                      <Typography className="text-mute" component="p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Link display="block" variant="body1" href="#">
                        <Grid container direction="row" alignItems="center">
                          <Grid item >Read More</Grid>
                          <Grid item alignItems="center">
                            <TrendingFlatIcon />
                          </Grid>
                        </Grid>
                      </Link>
                    </CardActions>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                      <CodeIcon />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h3" component="h2">
                        Web Development
                      </Typography>
                      <Typography className="text-mute" component="p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Link display="block" variant="body1" href="#">
                        <Grid container direction="row" alignItems="center">
                          <Grid item >Read More</Grid>
                          <Grid item alignItems="center">
                            <TrendingFlatIcon />
                          </Grid>
                        </Grid>
                      </Link>
                    </CardActions>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}>
                      <FormatShapesIcon />
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h3" component="h2">
                        Graphic Design
                      </Typography>
                      <Typography className="text-mute" component="p">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Link display="block" variant="body1" href="#">
                        <Grid container direction="row" alignItems="center">
                          <Grid item >Read More</Grid>
                          <Grid item alignItems="center">
                            <TrendingFlatIcon />
                          </Grid>
                        </Grid>
                      </Link>
                    </CardActions>
                  </Card>
                </Grow>
              </Grid>
            </Grid>
          </Container>
      </div>
    )
}