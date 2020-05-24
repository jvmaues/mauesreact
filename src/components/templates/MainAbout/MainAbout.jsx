import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from 'markdown-to-jsx';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { title, content } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6">Formação Acadêmica</Typography>
      <Typography>Ciência da Computação: Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (Cefet-RJ), 2017- cursando.</Typography>
      <Divider/>
      <Typography variant="h6">Tecnologias</Typography>
      <List>
        <ListItemText primary={"•	Java – Avançado;"}/>
        <ListItemText primary={"•	Javascript (node) - Avançado;"}/>
        <ListItemText primary={"•	React - Avançado;"}/>
        <ListItemText primary={"•	 C++ - Intermediário;   "}/>
        <ListItemText primary={"•	Python - Avançado;"}/>
        <ListItemText primary={"•	PostgreSQL - Intermediário;"}/>
        <ListItemText primary={"•	MySQL - Intermediário;"}/>
        <ListItemText primary={"•	HTML5 e CSS3 - Avançado;"}/>
        <ListItemText primary={"•	AWS - intermediário."}/>
      </List>
      <Divider/>
      <Typography variant="h6">Experiência Profissional</Typography>
      <List>
        <ListItemText primary={"•	Desenvolvedor Web.Tattoo.Ai – de julho/2019, atual. Responsável por desenvolver uma plataforma que consiste em um marketplace de tatuadores, a aplicação web é desenvolvida em node e React, utilizando servidores na AWS."}/>
        <ListItemText primary={"•	Analista de Dados. Hazel Risk – de julho/2018 à abril/2019. Responsável na atuação com ferramentas da Google (google analytics, tag manager, data studio). Atuação no desenvolvimento de análises de dado com ferramentas da AWS tais como: EC2, Data pipeline, Cloudwatch). Organização de dados da empresa, análises de logs da plataforma, busca de insights para o negócio."}/>
      </List>
      <Divider/>
      <Typography variant="h6">Formação Complementar</Typography>
      <List>
        <ListItemText primary={"•	Data analysis: introdução a séries temporais e análises – Alura Treinamentos, 2018."}/>
        <ListItemText primary={"•	Machine Learning e Data Science com Python – Udemy, 2019."}/>
        <ListItemText primary={"•	Introdução à modelagem matemática, programação linear, ferramenta solver(EXCEL) – CEFET, 2019."}/>
        <ListItemText primary={"•	Bootcamp e curso de Ciência de Dados aplicado à Saúde – Fio Cruz, 2020."}/>
      </List>

    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};