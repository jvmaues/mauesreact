import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Main from '../../templates/Main/Main';
import MainFeaturedPost from '../../basics/MainFeaturedPost/MainFeaturedPost';
import { Typography } from '@material-ui/core';




function Home() {
    
    const useStyles = makeStyles((theme) => ({
        mainGrid: {
          marginTop: theme.spacing(3),
        },
      }));
    
      const classes = useStyles();
    
      const mainFeaturedPost = {
        title: 'Desenvolvedor, programador, aluno, profissional, curioso...',
        description: 'Um espaço para compartilhar um pouco das minhas ideias e projetos.',
        image: './amplifyapp/src/assets/img/coding.jpg',
        imgText: 'A image with coffe, notebook and a table',
      };


    return (
        <React.Fragment>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={12} className={classes.mainGrid}>
                <Main title="Home"/>
                <Typography>Desenvolvi esse Site em React e Material UI, a implantação do site fiz com ferramentas AWS, resolvi criar esse site como forma de testar meus conhecimentos e desenvolver um portifólio pesseoal com o intuito de compartilhar conhecimento e ideias.</Typography>
            </Grid>
        </React.Fragment>
    )
}

export default Home