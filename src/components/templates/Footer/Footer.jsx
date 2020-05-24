import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © 2020.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(0),
    padding: theme.spacing(0, 0),
    bottom: 0,

  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;
  
  const FooterContainer = styled.div`
      position: static;
      left: 0;
      bottom: 0;
      text-align: center;
      width: 100%;
      background: #DDDDDA;
      min-height: 30vh;
      `;


  return (
    <footer className={classes.footer}>
      <FooterContainer>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
      </FooterContainer>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};