import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Main from '../../templates/Main/Main';
import MainFeaturedPost from '../../basics/MainFeaturedPost/MainFeaturedPost';

import post1 from '../../../posts/blog-post.1.md';
import post2 from '../../../posts/blog-post.2.md';
import post3 from '../../../posts/blog-post.3.md';



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

      const posts = [post1, post2, post3];

    return (
        <React.Fragment>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={12} className={classes.mainGrid}>
                <Main title="Home" posts={posts} />
            </Grid>
        </React.Fragment>
    )
}

export default Home