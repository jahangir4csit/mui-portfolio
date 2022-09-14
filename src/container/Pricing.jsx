import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
  margin: {
    margin: theme.spacing(1),
  },
  card: {
    padding: '40px 0',
  },
  cardHeader: {
    color: theme.palette.common.blue,
    padding: 0,
    '& span': {
      textTransform: 'uppercase',
      fontSize: '14px',
      letterSpacing: '1px',
      fontWeight: '700',
      marginBottom: 0,
    },
  },
  cardContent: {
    '& ul': {
      padding: 0,
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
      },
    },
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
    '& span': {
      fontSize: '50px',
    },
    
  },
  cardAction: {
    justifyContent: 'center',
    '& button': {
      fontWeight: 600,
      width: '60%',
      padding: '1rem .5rem',
      boxShadow: '0px 24px 48px -13px rgb(0 0 0 / 11%)',
      '&:hover': {
        backgroundColor: theme.palette.common.blue,
        color: white,
      },
    },
  },
  sup: {
    fontSize: '24px',
    top: '-.8em',
    position: 'relative',
    lineHeight: '0',
    verticalAlign: 'baseline',
  },
}));

export default function Pricing() {
  const classes = useStyle();
    return(
      <div className="page">
        <div className={classes.head}></div>
          <Container maxWidth="md" component="main" className={classes.root}>
            <Grid container direction="row">
              <Grid item xs={12} align="center" className="page-heading mb-5">
                <Grow in timeout={800} >
                  <Typography variant="h4">
                    Pricing
                  </Typography>
                </Grow>
                <Grow in timeout={900} >
                  <Typography variant="h2" className="mb-4">
                    Pricing & Packages
                  </Typography>
                </Grow>
              </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={4}>
                <Grow in timeout={1000} >
                  <Card className={classes.card} >
                    <CardHeader className={classes.cardHeader} title="BASIC PLAN" titleTypographyProps={{ align: 'center' }} />
                    <CardContent className={classes.cardContent}>
                      <div className={classes.cardPricing}>
                        <Typography component="sup" color="Primary" className={classes.sup}>
                          $
                        </Typography>
                        <Typography component="span" variant="h3">
                          {'109K'}
                        </Typography>
                      </div>
                      <ul>
                        <Typography component="li" variant="subtitle1" align="center">
                          Far far away, behind the word
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          mountains, far from the
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          countries Vokalia and
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          Consonantia, there live the
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          blind texts.
                        </Typography>
                      </ul>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                        Get Started
                      </Button>
                    </CardActions>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <CardHeader className={classes.cardHeader} title="BEGINNER PLAN" titleTypographyProps={{ align: 'center' }} />
                    <CardContent className={classes.cardContent}>
                      <div className={classes.cardPricing}>
                        <Typography component="sup" color="Primary" className={classes.sup}>
                          $
                        </Typography>
                        <Typography component="span" variant="h3">
                          {'109K'}
                        </Typography>
                      </div>
                      <ul>
                        <Typography component="li" variant="subtitle1" align="center">
                          Far far away, behind the word
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          mountains, far from the
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          countries Vokalia and
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          Consonantia, there live the
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          blind texts.
                        </Typography>
                      </ul>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                        Get Started
                      </Button>
                    </CardActions>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <CardHeader className={classes.cardHeader} title="PREMIUM PLAN" titleTypographyProps={{ align: 'center' }} />
                    <CardContent className={classes.cardContent}>
                      <div className={classes.cardPricing}>
                        <Typography component="sup" color="Primary" className={classes.sup}>
                          $
                        </Typography>
                        <Typography component="span" variant="h3">
                          {'109K'}
                        </Typography>
                      </div>
                      <ul>
                        <Typography component="li" variant="subtitle1" align="center">
                          Far far away, behind the word
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          mountains, far from the
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          countries Vokalia and
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          Consonantia, there live the
                        </Typography>
                        <Typography component="li" variant="subtitle1" align="center">
                          blind texts.
                        </Typography>
                      </ul>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                        Get Started
                      </Button>
                    </CardActions>
                  </Card>
                </Grow>
              </Grid>
            </Grid>
          </Container>
      </div>
    )
}