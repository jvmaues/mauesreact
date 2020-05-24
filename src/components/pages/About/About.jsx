import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssessmentIcon from '@material-ui/icons/Assessment';

import MainAbout from '../../templates/MainAbout/MainAbout';

import Sidebar from '../../basics/Sidebar/Sidebar';



const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

function About() {

    const classes = useStyles();

    const sidebar = {
        title: 'About',
        description:
            'Estudante de Ciência da Computação, busco oportunidade para adquirir experiência com desenvolvimento de sistemas e análise de dados. Prezo sempre trabalhar em equipe, cooperando com todos, buscando sempre melhorar, possuo grande satisfação em ensinar e aprender.',
        archives: [
            { title: 'March 2020', url: '#' },
            { title: 'February 2020', url: '#' },
            { title: 'January 2020', url: '#' },
            { title: 'November 1999', url: '#' },
            { title: 'October 1999', url: '#' },
            { title: 'September 1999', url: '#' },
            { title: 'August 1999', url: '#' },
            { title: 'July 1999', url: '#' },
            { title: 'June 1999', url: '#' },
            { title: 'May 1999', url: '#' },
            { title: 'April 1999', url: '#' },
        ],
        links: [
            { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/jvmaues' },
            { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/joaovitormaues/' },
            { name: 'Kaggle', icon: AssessmentIcon, url: 'https://www.kaggle.com/jvmaues' },
        ],
    };


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={4}>

                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <MainAbout title="About me"/>
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            links={sidebar.links}
                        />
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}

export default About