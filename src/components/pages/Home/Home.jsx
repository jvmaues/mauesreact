import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Main from '../../templates/Main/Main';
import MainFeaturedPost from '../../basics/MainFeaturedPost/MainFeaturedPost';




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
        imgText: 'A screen with codes and stylish lighting',
      };


    return (
        <React.Fragment>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={12} className={classes.mainGrid}>
                <Main title="Home"/>
            </Grid>
        </React.Fragment>
    )
}

export default Home