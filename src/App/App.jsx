import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

import Route from './Routes';
import Header from '../components/templates/Header/Header';
import Footer from '../components/templates/Footer/Footer';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About me', url: '/about' },
  { title: 'Machine Learning', url: '/machinelearning' },
  { title: 'Web development', url: '/webdevelopment' },
  { title: 'Optimization', url: '/optimization' },
  { title: 'Data Science', url: '/datascience' },
  { title: 'News', url: '/news' },
];

export default function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={'Coffee & Dev'} sections={sections} />
        <main>
          <Route/>
        </main>
      </Container>
      <Footer title="João Vitor Maués" description="Done by Dev for Dev" />
    </BrowserRouter>
  );
}