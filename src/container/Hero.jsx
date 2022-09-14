import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import heroImg from '../assets/img/hero_bg.jpg';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { white } from 'material-ui/styles/colors';
import { Grow } from '@material-ui/core';


const useStyle = makeStyles((theme)=>({
    heroWrap: {
        height: '100vh',
        minHeight: '100%',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        zIndex: '0',
        color: '#fff'
    },
    overlay:{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        opacity: '0',
        background: '#111111',
        zIndex: '-1',
    },
    button: {
        ...theme.typography.btn,
        '&:hover': {
            backgroundColor: theme.palette.common.blue,
            borderColor: theme.palette.common.blue,
            color: white,
        }
    },
    button2: {
        ...theme.typography.btn,
        marginLeft: '1rem',
        backgroundColor: '#fff', 
        color: '#0779e4',
        '&:hover': {
            backgroundColor: theme.palette.common.blue,
            borderColor: theme.palette.common.blue,
            color: white,
        }
    }
}))

const Hero = ()=>{
    const classes = useStyle();
    return(
        <Grow in timeout={1000} >
            <Grid className={classes.heroWrap} style={{ backgroundImage: `url(${heroImg})` }}
            container
            justify="center"
            direction="column"
            spacing={0}>
            <div className={classes.overlay}></div>
                <Container maxWidth="md">
                    <Grid
                    container 
                    spacing={0}
                    justify="center"
                    direction="column">
                        <Grid item md="7" xs="12">
                            <div className="slider-text">
                                <Badge className="subheading">Hi There!</Badge>
                                <Typography variant="h1" className="mb-4">
                                    I am Keannu Ford
                                    <Typography variant="typewrite" display="block">
                                        I Love to Develop.
                                    </Typography>
                                </Typography>
                                <div className="w-md-75 w-100">
                                    <Typography component="p" className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        endIcon={<ArrowRightAltOutlinedIcon />}
                                    >Hire Me 
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        className={classes.button2}
                                        endIcon={<ArrowRightAltOutlinedIcon />}
                                    >
                                        View Portfolio
                                    </Button>
                                    <Typography className="social-media mt-5">
                                        <Link href="#"> <AddOutlinedIcon /> Facebook</Link>
                                        <Link href="#"> <AddOutlinedIcon /> Twitter</Link>
                                        <Link href="#"> <AddOutlinedIcon /> Linkedin</Link>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grow>
    )
}

export default Hero;