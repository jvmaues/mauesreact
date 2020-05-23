import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

import Route from './Routes';
import Header from './components/templates/Header/Header';
import Footer from './components/templates/Footer/Footer';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About me', url: '/about' },
  { title: 'Machine Learning', url: '/machinelearning' },
  { title: 'Web development', url: '/webdevelopment' },
  { title: 'Optimization', url: '/optimization' },
  { title: 'Data Science', url: '/datascience' },
  { title: 'News', url: '/news' },
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
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


{/**<Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}