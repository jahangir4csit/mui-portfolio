import React from 'react';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MapIcon from '@material-ui/icons/Map';
import CallIcon from '@material-ui/icons/Call';
import SendIcon from '@material-ui/icons/Send';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyle = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        width: '100%',
        background: '#eee',
        color: 'rgba(0,0,0,.8)',
      },
    footerTop: {
        padding: '5em 0',
    },
    link: {
        color: '#666',
        '& svg': {
            color: '#0779e4',
            marginRight: '5px',
            verticalAlign: 'middle',
        },
        '&:hover': {
            color: '#0779e4',
        }
    },
    footerHeading: {
        color: '#111',
        marginBottom: '32px',
        fontSize: '18px',
        fontWeight: '500',
        fontFamily: 'roboto,Arial,sans-serif',
    },
    footerLogo: {
        marginBottom: '40px',
    },
    footerMedia: {
        display: 'inline-flex',
    },
    footerDesc: {
        color: '#999',
        fontSize: '16px',
        marginRight: '150px',
        display: 'block'
    },
    list: {
        padding: '0',
    },
    listItem: {
        padding: '0',
        marginBottom: '.5rem',
        '& svg': {
            fontSize: '20px',
            color: '#0779e4',
        }
    },
    listItemIcon: {
        minWidth: '40px',
    },
    mediaitem: {
        minWidth: '51px',
    },
    mediaIcon: {
        backgroundColor: theme.palette.common.blue,
    },
    footerBottom: {
        padding: '3rem 0',
        backgroundColor: '#e9e9e9',
    },
    copyright: {
        fontSize: '14px'
    }
}));

const Footer = ()=>{
    const classes = useStyle();
    return(
        <footer className={classes.root}>
            <div className={classes.footerTop} >
                <Container maxWidth="md">
                    <Grid container justify="flex-start" direction="row" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Grid container direction="column">
                                <Grid item className={classes.link}>
                                    <Typography variant="h2" className={classes.footerLogo}>Kn.Ford</Typography>
                                    <Typography variant="p" className={classes.footerDesc}>
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <List component="nav" aria-label="footer media" className={classes.footerMedia}>
                                        <ListItem disableGutters>
                                            <ListItemAvatar className={classes.mediaitem}>
                                                <Link href="#">
                                                    <Avatar className={classes.mediaIcon}>
                                                        <TwitterIcon />
                                                    </Avatar>
                                                </Link>
                                            </ListItemAvatar>
                                        </ListItem>
                                        <ListItem disableGutters>
                                            <ListItemAvatar className={classes.mediaitem}>
                                                <Link href="#">
                                                    <Avatar className={classes.mediaIcon}>
                                                        <FacebookIcon />
                                                    </Avatar>
                                                </Link>
                                            </ListItemAvatar>
                                        </ListItem>
                                        <ListItem disableGutters>
                                            <ListItemAvatar className={classes.mediaitem}>
                                                <Link href="#">
                                                    <Avatar className={classes.mediaIcon}>
                                                        <InstagramIcon />
                                                    </Avatar>
                                                </Link>
                                            </ListItemAvatar>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.gridItem} xs={12} sm={3}>
                            <Grid container direction="column"  spacing={2}>
                                <Grid item className={classes.link}>
                                    <Typography variant="h2" 
                                    className={classes.footerHeading}>
                                        Services
                                    </Typography>
                                </Grid>
                                <Grid item component={Link} to="/webdesign" className={classes.link}>
                                    <TrendingFlatIcon/> Web Design
                                </Grid>
                                <Grid item component={Link} to="/wedevelopment" className={classes.link}>
                                    <TrendingFlatIcon/> Web Development
                                </Grid>
                                <Grid item component={Link} to="/ui" className={classes.link}>
                                    <TrendingFlatIcon/>UI/UX Design
                                </Grid>
                                <Grid item component={Link} to="/graphics" className={classes.link}>
                                    <TrendingFlatIcon/>Graphic Design
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.gridItem} xs={12} sm={3}>
                            <Grid container direction="column"  spacing={0}>
                                <Grid item>
                                    <Typography variant="h2" 
                                    className={classes.footerHeading}>
                                        Have a Questions?
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.footerInfo}>
                                    <List className={classes.list}>
                                        <ListItem alignItems="flex-start" className={classes.listItem}>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <MapIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography
                                                variant="span"
                                                className={classes.footerInfoText}>
                                                203 Fake St. Mountain View, San Francisco, California, USA
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem alignItems="flex-start" className={classes.listItem}>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <CallIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography
                                                variant="span"
                                                className={classes.footerInfoText}>
                                                	+2 392 3929 210
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem alignItems="flex-start" className={classes.listItem}>
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography
                                                variant="span"
                                                className={classes.footerInfoText}>
                                                	info@yourdomain.com
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.footerBottom}>
                <Container maxWidth="md">
                    <Grid container justify="center" direction="row">
                        <Grid item>
                            <Typography className={classes.copyright}>Copyright ©2021 All rights reserved</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </footer>
    );
}
export default Footer;