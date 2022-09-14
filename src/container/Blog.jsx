import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grow } from '@material-ui/core';

import DateRangeIcon from '@material-ui/icons/DateRange';
import SmsIcon from '@material-ui/icons/Sms';

import blogImg from '../assets/img/Blog/image_4.jpg';

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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '70%',
  },
  cardContent: {
    flexGrow: 1,
  },
  meta: {
    display: 'inline-block',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    '& span': {
      marginRight: '15px',
      fontWeight: 600,
      fontSize: '13px',
    },
    '& svg': {
      verticalAlign: 'middle',
      fontSize: '17px',
    },
  },
  blogtitle: {
    color: '#000',
    fontSize: '20px',
    fontWeight: '500',
    transition: '.3s all',
    '&:hover': {
      color: theme.palette.common.blue,
    },
  }

}));

const Blog = (props) => {
  const classes = useStyle();
    return(
      <main>
        <div className={classes.head}></div>
        <Container maxWidth="md" component="main" className={classes.root}>
          <Grid container direction="row">
            <Grid item xs={12} align="center" className="page-heading mb-5">
              <Grow in timeout={800} >
                <Typography variant="h4">
                  OUR BLOG
                </Typography>
              </Grow>
              <Grow in timeout={900} >
                <Typography variant="h2" className="mb-4">
                  Recent From Blog
                </Typography>
              </Grow>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>

            <Grid item xs={12} sm={6} md={6}>
              <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <Link href="#">
                      <CardMedia
                        className={classes.cardMedia}
                        image={blogImg}
                        title="Image title"
                      />
                    </Link>
                    <CardContent className={classes.cardContent}>
                      <div className={classes.meta} >
                        <Typography variant="p" style={{color: '#999999'}}><DateRangeIcon color="primary" style={{marginTop: '-3px'}} /> JAN. 18, 2021</Typography>
                        <Typography variant="p" color="primary"><SmsIcon /> 3 COMMENTS</Typography>
                      </div>
                      <Typography gutterBottom variant="h5" component="h3">
                        <Link href="#" className={classes.blogtitle}>Tips About Creating A New Web Design</Link>
                      </Typography>
                      <Typography variant="body2" component="p" className="text-mute">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <Link href="#">
                      <CardMedia
                        className={classes.cardMedia}
                        image={blogImg}
                        title="Image title"
                      />
                    </Link>
                    <CardContent className={classes.cardContent}>
                      <div className={classes.meta} >
                        <Typography variant="p" style={{color: '#999999'}}><DateRangeIcon color="primary" style={{marginTop: '-3px'}} /> JAN. 18, 2021</Typography>
                        <Typography variant="p" color="primary"><SmsIcon /> 3 COMMENTS</Typography>
                      </div>
                      <Typography gutterBottom variant="h5" component="h3">
                        <Link href="#" className={classes.blogtitle}>Tips About Creating A New Web Design</Link>
                      </Typography>
                      <Typography variant="body2" component="p" className="text-mute">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <Link href="#">
                      <CardMedia
                        className={classes.cardMedia}
                        image={blogImg}
                        title="Image title"
                      />
                    </Link>
                    <CardContent className={classes.cardContent}>
                      <div className={classes.meta} >
                        <Typography variant="p" style={{color: '#999999'}}><DateRangeIcon color="primary" style={{marginTop: '-3px'}} /> JAN. 18, 2021</Typography>
                        <Typography variant="p" color="primary"><SmsIcon /> 3 COMMENTS</Typography>
                      </div>
                      <Typography gutterBottom variant="h5" component="h3">
                        <Link href="#" className={classes.blogtitle}>Tips About Creating A New Web Design</Link>
                      </Typography>
                      <Typography variant="body2" component="p" className="text-mute">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Grow in timeout={1000} >
                  <Card className={classes.card}>
                    <Link href="#"> 
                      <CardMedia
                        className={classes.cardMedia}
                        image={blogImg}
                        title="Image title"
                      />
                    </Link>
                    <CardContent className={classes.cardContent}>
                      <div className={classes.meta} >
                        <Typography variant="p" style={{color: '#999999'}}><DateRangeIcon color="primary" style={{marginTop: '-3px'}} /> JAN. 18, 2021</Typography>
                        <Typography variant="p" color="primary"><SmsIcon /> 3 COMMENTS</Typography>
                      </div>
                      <Typography gutterBottom variant="h5" component="h3">
                        <Link href="#" className={classes.blogtitle}>Tips About Creating A New Web Design</Link>
                      </Typography>
                      <Typography variant="body2" component="p" className="text-mute">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
            </Grid>

          </Grid>
        </Container>
        
      </main>
    )
}
export default Blog;